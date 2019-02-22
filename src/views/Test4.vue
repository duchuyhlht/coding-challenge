<template>
<div class="card shadow">
  <div class="card-header border-0">
    <h3 class="mb-0">{{description.test4.title}}</h3>
    <p><small>{{description.test4.note}}</small></p>
  </div>
  <div class="card shadow">
    <!-- <div class="text-center pt-3">
      <base-button class="rounded-circle" type="warning"><i class="fas fa-plus"></i></base-button>
    </div> -->
    <div class="table-responsive">
      <form>
        <div class="form-group">
          <base-input v-model="search" placeholder="Search..." class="mx-4 pt-4"/>
        </div>
      </form>
      <table class="table align-items-center table-flush">
        <caption></caption>
        <colgroup>
          <col style="width:10%">
          <col style="width:20%;">
          <col>
        </colgroup>
        <thead class="thead-light">
          <tr>
            <th scope="col" v-for="column in data.columns" :key="column.field">{{ column.label }}</th>
          </tr>
        </thead>
        <tbody>
          <table-row v-for="row in visibleRows" :key="row.order" :info.sync="row" :question="searchQuestionResult(row)"/>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import TestCard from './components/TestCard'
import TableRow from './components/TableRow'
import { searchList } from '@/app/utils/Search'
import searchQuestion from '@/filters/searchQuestion'

export default {
  name: 'Test4',
  inject: ['TestService'],
  components: { TestCard, TableRow },
  data () {
    return {
      data: {
        columns: [],
        rows: []
      },
      search: ''
    }
  },
  mounted () {
    this.TestService.getData('test4').then(({ data }) => {
    this.data.columns = [ ...data.columns ]
    this.data.rows = [ ...data.rows ]
    })
  },
  computed: {
    visibleRows () {
      return searchList(this.search, this.data.rows, 'question')
    }
  },
  methods: {
    searchQuestionResult (item) {
      return searchQuestion(item)
    }
  }
}
</script>

<style scoped>
/* button.rounded-circle {
  width: 50px;
  height: 50px;
  padding: 10px;
} */
</style>
