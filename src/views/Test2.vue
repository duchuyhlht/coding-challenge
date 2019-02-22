<template>
<test-card number="2">
  <div class="bg-gray px-3 px-md-5 py-4">
    <div class="row">
      <div class="col-md-6" v-for="item in items" :key="item.id">
        <div class="card mb-3 overflow-hidden border-0">
          <div class="row">
            <div class="col-4">
              <div class="h-100" v-bg-img="item.image"></div>
            </div>
            <div class="col-8 py-2">
              <h4 class="post-category">{{item.category}}</h4>
              <h3 class="post-title">{{item.title}}</h3>
              <p class="post-description">{{item.description}}</p>
              <p class="post-author">{{item.author}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</test-card>
</template>

<script>
import TestCard from './components/TestCard'

export default {
  name: 'Test2',
  inject: ['TestService'],
  components: { TestCard },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.TestService.getData('test2').then(({ data }) => {
      this.items = data
    })
  }
}
</script>
