<template>
  <div class="test-container">
    <div class="row mb-1">
      <p class="col-sm-8">Implement <strong>input</strong>, <strong>datepicker</strong>, and <strong>select/dropdown</strong> knowing that these component get initial data from server and be able to retrieve new data as user change it.</p>
      <p>Use <a href="http://element.eleme.io/?ref=madewithvuejs.com#/en-US" target="_blank">Vue Element</a> library</p>
    </div>
    <!-- Code goes here!-->
    <!-- Disclaimer & Assumption -->
    <div class="block-note">
      <p>Assuming that:</p>
      <p>- No server API to get initial data for Test 2. Only fake timeout to simulate remote request.</p>
      <p>- Select is able to get data from 2 APIs: /owner and /modifier</p>
      <p>- Not very clear of "Be able to retrieve new value as user change it". It would be weird in this test because data cannot be saved but we loaded new values which make it seems like nothing happened</p>
    </div>
    <div class="form">
      <base-input label="Input"
        v-model="inputData"
        :disabled="loading"
        class="form-input form-group"
      />
      <input-number label="Input Number"
        required
        v-model="inputNumber"
        :disabled="loading"
        class="form-input form-group"
      />
      <date-picker label="Date picker"
        v-model="dateData"
        :disabled="loading"
        class="form-input form-group"
        @change="handleDataChange()"
      />
      <data-select label="Modifier select" name="modifier"
        v-model="modifier"
        endPoint="/modifier"
        :disabled="loading"
        @change="handleDataChange()"
        class="form-input form-group"
      />
      <data-select label="Owner select" name="owner"
        v-model="owner"
        endPoint="/owner"
        :disabled="loading"
        @change="handleDataChange()"
        class="form-input form-group"
      />
    </div>
  </div>
</template>

<script>
import DataSelect from './Test2Component/dataselect'
import BaseInput from './Test2Component/input'
import InputNumber from './Test2Component/inputnumber'
import DatePicker from './Test2Component/datepicker'

export default {
  name: 'Test2',
  components: { DataSelect, BaseInput, DatePicker, InputNumber },
  data () {
    return {
      inputData: '',
      inputNumber: '',
      dateData: null,
      modifier: null,
      owner: null,
      color: '',

      loading: true
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    handleDataChange (newValue) {
      return this.loadData()
    },
    loadData () {
      return this.getData().then(res => {
        Object.assign(this, res)

        return true
      })
    },
    getData () {
      this.loading = true

      return new Promise(resolve => {
        setTimeout(() => {
          this.loading = false

          // Simulating data
          return resolve({
            inputData: 'This is initial data.',
            dateData: new Date(1551693570892),
            color: '#cdcdcd',
            owner: { 'refId': '1003', 'value': '1003', 'label': '손유정' },
            modifier: { 'refId': 'admin1', 'value': 'admin1', 'label': '관리자테스트' }
          })
        }, 900)
      })
    }
  }
}
</script>

<style scoped>
  .mb-1, .my-1 {
    margin-bottom: 4px!important;
    margin-bottom: .25rem!important;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-sm-2 {
     -ms-flex: 0 0 16.666667%;
     flex: 0 0 16.666667%;
     max-width: 16.666667%;
     align-items: center;
     display: flex;
   }
  .col-sm-2, .col-sm-10 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .pt-1, .py-1 {
    padding-top: 4px!important;
    padding-top: .25rem!important;
  }
  .col-sm-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .progress, .progress-bar {
    display: -ms-flexbox;
    display: flex;
  }
  .progress {
    height: 16px;
    height: 1rem;
    overflow: hidden;
    font-size: 12px;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .25rem;
  }
  .progress-bar {
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #007bff;
    transition: width .6s ease;
  }
  .progress, .progress-bar {
    display: -ms-flexbox;
    display: flex;
  }
  * {
    -webkit-font-smoothing: antialiased;
  }
  *, :after, :before {
    box-sizing: border-box;
  }

</style>
