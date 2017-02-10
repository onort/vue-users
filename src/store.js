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

  mutations: {
    recievedUsers (state, data) {
      state.users = data.users
    }
  },

  actions: {
    fetchUsers (context) {
      usersApi.getAllUsers()
        .then(data => {
          context.commit('recievedUsers', data)
        })
        .catch(err => console.log(err))
    }
  }
})

