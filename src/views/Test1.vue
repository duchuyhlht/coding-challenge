<template>
<test-card number="1">
  {{selectRow.order}}
  <div class="table-responsive">
    <table class="table align-items-center table-flush">
      <caption></caption>
      <colgroup>
        <col style="width:10%">
        <col style="width:20%">
        <col>
      </colgroup>
      <thead class="thead-light">
        <tr>
          <th scope="col" v-for="column in data.columns" :key="column.field">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data.rows" class="head hover" :class="{'bg-primary text-white':selectRow.title.order === row.title.order}" :key="row.title.order" @click="selectRow = row">
          <td>{{row.title.order}}</td>
          <td>{{row.title.type}}</td>
          <td>{{row.title.question}}</td>
        </tr>

        <tr class="body active" v-if="selectRow.content">
          <td colspan="3">
            <div class="answer img-preview" id="cont0">
              <div v-html="selectRow.content"></div>
              <div class="text-center mt-5">
                <base-button @click="scrollTop()">Go to top</base-button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</test-card>
</template>

<script>
import TestCard from './components/TestCard'

export default {
  name: 'Test1',
  inject: ['TestService'],
  components: { TestCard },
  data () {
    return {
      data: {
        columns: [],
        rows: []
      },
      selectRow: {
        title: {}
      }
    }
  },
  mounted () {
    this.TestService.getData('test1').then(({ data }) => {
      this.data.columns = [ ...data.columns ]
      this.data.rows = [ ...data.rows ]
    })
  },
  methods: {
    scrollTop () {
      if (window.scroll) window.scroll({top: 0, left: 0, behavior: 'smooth' })
      else window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.hover:hover {
  background-color: #eee;
  cursor: pointer;
}
</style>
