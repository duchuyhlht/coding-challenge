<template>
<test-card number="3">
  <div class="px-3 px-md-5 py-4">
    <div class="text-center">
      <base-button @click="randomValues()">Random</base-button>
    </div>
    <div v-for="item in items" :key="item.id">
      <base-progress :value="item.size | percentForBar" :label="item.title" :color="item.color"></base-progress>
    </div>
  </div>
</test-card>
</template>

<script>
import TestCard from './components/TestCard'
import { RandomNumber } from '@/app/utils/Generator'

export default {
  name: 'Test3',
  inject: ['TestService'],
  components: { TestCard },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.TestService.getData('test3').then(({ data }) => {
      this.items = data
    })
  },
  methods: {
    randomValues () {
      this.items.forEach(item => {
        item.size = `${RandomNumber(2)}%`
      })
    }
  },
  filters: {
    percentForBar (text) {
      return text.replace('%', '')
    }
  }
}
</script>
