<template>
  <div class="test-container">
    <h4>Render a datatable using test4.json</h4>
    <p>Note: Calculate Average value, Total value </p>
    <!-- Code goes here!-->
    <!-- Disclaimer & Assumption -->
    <div class="block-note">
      <p>Assuming that:</p>
      <p>- The chart has 2 axes present Total and Average. Because we can't show any of Teamwork, Benefit or Career as an axis.</p>
    </div>
    <line-chart
      :data="data"
      xtitle="Total"
      ytitle="Average"
      class="mt-5"
    />
  </div>
</template>

<script>
import data from './JsonFiles/test4'

export default {
  name: 'Test4',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.buildData()
  },
  methods: {
    buildData () {
      this.data = this.groupData(data)
    },
    total (item) {
      return item.Teamwork + item.Benefit + item.Career

      // let result = 0
      // for (let k in item) {
      //   result += item[k]
      // }
      // return result
    },
    average (item) {
      return Math.round(this.total(item) / 3 * 100) / 100
    },
    groupData (list) {
      let factorIndex = {}

      return list.reduce((result, current) => {
        let { id, name } = current
        let total = this.total(current.data)
        let average = this.average(current.data)

        if (!factorIndex[id]) {
          result.push({
            id,
            name,
            data: {}
          })
          factorIndex[id] = result.length - 1
        }

        let index = factorIndex[id]
        let item = result[index]

        item.data[total] = average

        return result
      }, [])
    }
  }
}
</script>

<style scoped>
.mt-5 {
  margin-top: 3rem;
}
</style>
