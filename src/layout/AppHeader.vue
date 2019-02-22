<template>
<div>
  <div class="header bg-gradient-primary py-5 pt-md-6">
    <div class="container-fluid">
      <div class="header-body">
        <h3 v-html="description.disclaimer"></h3>
      </div>
    </div>
  </div>
  <div class="text-center pt-3">
    <router-link tag="base-button" to="/" type="neutral">Go back home</router-link>
  </div>
  <div class="container text-center pt-5">
    <router-link v-for="(t, index) in tabs" tag="base-button" :to="t.link" :key="index" type="neutral">{{t.name}}</router-link>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tabs: []
    }
  },
  mounted () {
    for (var i = 1; i <= 4; i++) {
      this.tabs.push(buildLink({ name: `${i}` }))
    }
  }
}
function buildLink ({ name }) {
  return {
    link: `/test${name}`,
    name: `Test ${name}`
  }
}
</script>
