import Vue from 'vue'
import Vuex from 'vuex'

import usersApi from './api/usersApi'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: [],
    singleUser: {}
  },

  getters: {
    allUsers (state) {
      return state.users
    },
    singleUser (state) {
      return state.singleUser
    }
  },

  mutations: {
    recievedUsers (state, data) {
      state.users = data.users
    },
    singleUser (state, data) {
      state.singleUser = data.user
    }
  },

  actions: {
    fetchUsers (context) {
      usersApi.getAllUsers()
        .then(data => {
          context.commit('recievedUsers', data)
        })
        .catch(err => console.log(err))
    },
    fetchUserByUsername (context, payload) {
      usersApi.getUserByUsername(payload.username)
        .then(data => {
          context.commit('singleUser', data)
        })
        .catch(err => console.log(err))
    }
  }
})

