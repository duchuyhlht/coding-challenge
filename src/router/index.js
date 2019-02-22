import Vue from 'vue'
import Router from 'vue-router'
import Sitemap from './Sitemap'

import AppHeader from '@/layout/AppHeader'
import AppFooter from '@/layout/AppFooter'
import AppNavbar from '@/layout/AppNavbar'

import Main from '@/views/Main.vue'
import Home from '@/views/Home.vue'

const Test1 = () => import('@/views/Test1.vue')
const Test2 = () => import('@/views/Test2.vue')
const Test3 = () => import('@/views/Test3.vue')
const Test4 = () => import('@/views/Test4.vue')

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: Sitemap.index,
      components: {
        default: Main,
        header: AppHeader,
        footer: AppFooter,
        navbar: AppNavbar
      },
      children: [
        { path: '', component: Home },
        { ...Sitemap.test1, component: Test1 },
        { ...Sitemap.test2, component: Test2 },
        { ...Sitemap.test3, component: Test3 },
        { ...Sitemap.test4, component: Test4 }
      ]
    },
    { path: '*', redirect: Sitemap.index } // 404 not found
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
