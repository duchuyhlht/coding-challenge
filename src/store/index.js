import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { SET_LOGGED_IN, SET_PROFILE } from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      isLoggedIn: false
    },
    profile: {

    },
    value: {

    }
  },
  mutations: {
    [SET_LOGGED_IN] (state, value) {
      state.account.isLoggedIn = value
    },
    [SET_PROFILE] (state, value) {
      state.profile = value
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})
