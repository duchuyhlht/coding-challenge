<template>
  <div class="test-container">
    <div class="row mb-1">
      <p class="col-sm-8">Render a dynamic form.</p>
      <p>More detailed in <strong>readme.md</strong> file</p>
    </div>
    <!-- Code goes here!-->
    <!-- Disclaimer & Assumption -->
    <div class="block-note">
      <p>Assuming that:</p>
      <p>- Structure & data are loaded once open form (page load even go out and back)</p>
      <p>- Select & picker will trigger load new data every time user change or search (uncheck Auto save to stop reloading)</p>
    </div>
    <div class="form">
      <div class="form-group">
        <el-checkbox v-model="autoload">Auto save changes (load new data)</el-checkbox>
      </div>

      <div v-for="(f, i) in structure" :key="i">
        <component
          class="form-input form-group"
          :is="f.component"
          :label="f.label"
          :name="f.label"
          :disabled="f.disabled || isLoading"
          :error="errors.first(f.label)"
          v-bind="f"
          v-model="info[f.value]"
          v-validate="f.rule"
          @change="handleDataChange"
        />
      </div>
    </div>

    <div class="block-message" :class="isInvalid ? 'block-invalid' : 'block-valid'">{{formValidityMsg}}</div>
  </div>
</template>

<script>
/********
 * Render a form with the following requirements:
    - Use data from this end point localhost:8080/structure as the structure of this form. Keep in mind that this structure can be changed dynamically.
    - Use data from this end point localhost:8080/data as initial data.
    - Add validation (for fields those marked 'required' in structure)
 * API explaination:
  -
*******/
import DataSelect from './Test2Component/dataselect'
import BaseInput from './Test2Component/input'
import InputNumber from './Test2Component/inputnumber'
import DatePicker from './Test2Component/datepicker'

import { createRequest } from '@/services/RequestFactory'

export default {
  components: { DataSelect, BaseInput, DatePicker, InputNumber },
  data () {
    return {
      autoload: true,
      isLoading: true,
      structure: [],
      initData: {},
      info: {}
    }
  },
  mounted () {
    this.loadForm()
  },
  computed: {
    isInvalid () {
      return Object.keys(this.fields).some(key => this.fields[key].dirty && this.fields[key].invalid)
    },
    formValidityMsg () {
      return this.isInvalid ? 'The form has invalid data.' : 'The form is valid.'
    }
  },
  methods: {
    handleDataChange () {
      if (this.autoload && !this.isInvalid) {
        this.loadForm()
      }
    },
    loadForm () {
      return Promise
        .all([
          this.getStructure(),
          this.getInitData()
        ])
        .then(() => this.formatData())
    },
    getStructure () {
      return createRequest({ url: '/structure' })
        .then(res => {
          let { data } = res

          if (data && data.length) {
            this.structure = this.buildStructure(data)
          }
        })
        .catch(error => {
          alert('Oops! Something went wrong. Please make sure that the server started.')
          throw error
        })
    },
    getInitData () {
      this.isLoading = true

      return createRequest({ url: '/data' })
        .then(res => {
          let { data } = res

          if (data) {
            this.initData = data
          }
        })
        .catch(error => {
          alert('Oops! Something went wrong. Please make sure that the server started.')
          throw error
        })
        .then(() => {
          this.isLoading = false
        })
    },
    formatData () {
      this.structure.forEach(f => {
        switch (f.valueType.value) {
          case 'DATE':
            this.initData[f.value] = new Date(Number(this.initData[f.value]))
            break
        }
      })

      this.info = this.initData

      return this.info
    },
    buildStructure (list) {
      return list.map(item => {
        return {
          ...item,
          component: this.buildComponentName(item.valueType),
          ...this.buildSelectComponent(item),
          rule: this.buildValidationRule(item)
        }
      })
    },
    buildComponentName (valueType) {
      switch (valueType.value) {
        case 'DATE':
          return 'date-picker'
        case 'REFERENCE':
          return 'data-select'
        case 'LONG':
          return 'input-number'
        default:
          return 'base-input'
      }
    },
    buildSelectComponent (data) {
      let { valueType, value } = data
      if (valueType.value !== 'REFERENCE') return {}

      return {
        endPoint: value === 'owner' ? '/owner' : '/modifier'
      }
    },
    buildValidationRule (data) {
      let result = ''

      if (data.required) result += 'required|'

      return result.substr(0, result.length - 1)
    }
  }
}
</script>

<style scoped>
  * {
    -webkit-font-smoothing: antialiased;
  }
  *, :after, :before {
    box-sizing: border-box;
  }

</style>
