<template>
  <div class="table-wrap coltype test-container">
    <h4>Render a datatable using test1.json</h4>
    <p>Note: the amount of Column can be changed dynamically. </p>
    <!-- Disclaimer & Assumption -->
    <div class="block-note">
      <p>Assuming that:</p>
      <p>- There is a search button in the code template. Therefore, the search idea is that it is only triggered by clicking that button.</p>
      <p>- Search idea: exact match > contain > none.</p>
    </div>
    <div class="form-group">
      <label>Type</label>
      <input type="text" class="" v-model="input.type">
      <label>Q&A</label>
      <input type="name" class="" v-model="input.question">
      <button type="submit" class="btn btn-primary" @click="addItem()">Add</button>
    </div>
    <br/>
    <!-- Code goes here!-->
    <el-input style="max-width:600px" v-model="search" @keypress.enter="doSearch()">
      <el-button slot="append" icon="el-icon-search" @click="doSearch()">Search</el-button>
    </el-input>

    <test-table class="mt-3">
      <th slot="header" scope="col" v-for="column in data.columns" :key="column.field">{{ column.label }}</th>

      <tr v-for="(row, i) in rows" :key="i">
        <td v-for="column in data.columns" :key="column.field">{{ row[column.field] }}</td>
      </tr>
    </test-table>
  </div>
</template>

<script>
import jsonData from './JsonFiles/test1'
import TestTable from './Test1Component/TestTable'
import { searchList } from '@/utils/Search'

export default {
  components: { TestTable },
  data () {
    return {
      data: {
        columns: [],
        rows: []
      },
      input: {
        type: '',
        question: ''
      },
      search: '',
      searchTerms: ''
    }
  },
  mounted () {
    this.data.columns = [ ...jsonData.columns ]
    this.data.rows = [ ...jsonData.rows ]
  },
  computed: {
    rows () {
      return searchList(this.searchTerms, this.data.rows, ['question', 'type', 'order'])
    },
    isValidAdding () {
      return this.input.type.length && this.input.question.length
    }
  },
  methods: {
    doSearch () {
      this.searchTerms = this.search
    },
    getLatestOrder () {
      return this.data.rows.reduce((result, current) => Math.max(result, current.order), 1)
    },
    addItem () {
      if (!this.isValidAdding) return alert('Please fill in to continue.')
      let item = { ...this.input, order: this.getLatestOrder() + 1 }
      this.data.rows.push(item)
      this.input = {}
    },
    clearAddForm () {
      this.input.type.length = 0
      this.input.question.length = 0
    }
  }
}
</script>

<style scoped>
  .mt-3 {
    margin-top: 1.5rem;
  }

  .table-wrap {
    border-top: 1px solid #767676;
    border-bottom: 1px solid #767676;
  }
  table.ui-accordion {
    border-top: none;
  }
  .ui-accordion {
    border-top: 1px solid #bebebe;
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
    background: #fff;
  }
  table caption {
    display: none;
  }
  caption {
    display: table-caption;
    text-align: -webkit-center;
  }
  colgroup {
    display: table-column-group;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .table-wrap.coltype table thead th {
    padding: 12px 5px 10px;
    line-height: 22px;
    color: #444;
    text-align: center;
    vertical-align: middle;
    background: #f6f6f6;
  }
  th {
    font-weight: bold;
  }
  td, th {
    display: table-cell;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .table-wrap.coltype table tbody tr:first-child th, .table-wrap.coltype table tbody tr:first-child td {
    border-top: 1px solid #eee;
  }
  .table-wrap.coltype table tbody td {
    padding: 16px 5px 14px;
    line-height: 22px;
    color: #666;
    text-align: center;
    vertical-align: middle;
  }
  a, a:visited, a:focus {
    text-decoration: none;
  }
  a {
    color: #666;
  }
  table.ui-accordion .body {
    display: none;
  }
  .table-wrap.coltype table tbody td {
    padding: 16px 5px 14px;
    line-height: 22px;
    color: #666;
    text-align: center;
    vertical-align: middle;
  }
  .table-wrap table tbody td {
    padding: 12px;
    vertical-align: middle;
    text-align: left;
    color: #666;
    border-top: 1px solid #e0e0e0;
  }
  .table-wrap.coltype table td .attached {
    padding: 15px 0;
    text-align: right;
    color: #46675c;
  }
  strong, .strong {
    font-weight: 600;
  }
  .table-wrap.coltype table td .attached a {
    display: inline-block;
    color: #46675c;
  }

  .md-form input[type=text] {
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    box-sizing: content-box;
    background-color: transparent;
  }
  .md-form .form-control {
    margin: 0 0 0.5rem 0;
    border-radius: 0;
    padding: 0.3rem 0 0.55rem 0;
    background-image: none;
    background-color: transparent;
    height: auto;
  }
  .dataTables_wrapper input {
    display: inline-flex !important;
  }
  .form-control {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  button, input {
    overflow: visible;
  }
  button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
</style>
