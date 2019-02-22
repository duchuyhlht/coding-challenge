import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Argon from './plugins/css-kit'
import directives from './directives'
import filters from './filters'
import globalMixin from './mixins'
import services from './services'

/* --------------------- */
/* ------ Utils -------- */
require('@/app/core')
/* --------------------- */

Vue.config.productionTip = false

Vue.use(Argon)
Vue.use(directives)
Vue.use(filters)

Vue.mixin(globalMixin)

new Vue({
  provide: {
    ...services
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
