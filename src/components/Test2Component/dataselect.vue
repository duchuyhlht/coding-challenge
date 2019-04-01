<template>
  <div>
    <label v-if="label">{{label}}<span v-if="$attrs.required" class="required"> *</span></label>
    <el-select
      :value="value"
      filterable
      remote
      reserve-keyword
      :remote-method="getSelectData"
      :loading="selectLoading"
      @input="onChange($event)"
      v-bind="$attrs"
    >
      <el-option
        v-for="item in selectList"
        :key="item.value"
        :label="item.label"
        :value="item">
      </el-option>
    </el-select>
  </div>
</template>
<script>
import { createRequest } from '@/services/RequestFactory'
export default {
  props: {
    value: Object,
    label: String,
    endPoint: {
      type: String,
      required: true,
      description: 'API Endpoint to get data'
    }
  },
  data () {
    return {
      selectList: [],
      selectLoading: false
    }
  },
  mounted () {
    this.getSelectData(null)
  },
  methods: {
    onChange ($event) {
      this.$emit('input', $event)
      this.$emit('change', $event)
    },
    getSelectData (searchTerm) {
      if (searchTerm != null && searchTerm.trim().length === 0) return

      let postData = {
        searchTerm
      }

      let request = createRequest({ url: this.endPoint, params: postData })

      if (!request) return

      return request
        .then(res => {
          let { items } = res.data

          if (items && items.length) {
            this.selectList = items
          }
        })
        .catch(error => {
          alert('Oops! Something went wrong. Please make sure that the server started.')
          throw error
        })
    }
  }
}
</script>
