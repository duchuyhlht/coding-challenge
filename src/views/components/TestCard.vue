<template>
<div class="card shadow">
  <div class="card-header border-0">
    <h3 class="mb-0">{{title}}</h3>
    <p><small>{{note}}</small></p>
  </div>
  <div class="card">
    <slot/>
  </div>
</div>
</template>

<script>
export default {
  props: {
    number: String
  },
  computed: {
    title () {
      return (this.description[`test${this.number}`] || {}).title
    },
    note () {
      return (this.description[`test${this.number}`] || {}).note
    }
  }
}
</script>
