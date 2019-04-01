// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VeeValidate from 'vee-validate'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VeeValidate)
Vue.use(VueChartkick, {adapter: Chart})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
