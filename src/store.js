import Vue from 'vue'
import Vuex from 'vuex'

import usersApi from './api/usersApi'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: []
  },

  getters: {
    allUsers (state) {
      return state.users
    }
  },

  actions: {
    fetchUsers (context) {
      console.log('Store got fetchUsers action!')
      usersApi.getAllUsers()
    }
  }
})

