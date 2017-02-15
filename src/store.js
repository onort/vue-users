import Vue from 'vue'
import Vuex from 'vuex'

import usersApi from './api/usersApi'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: [],
    singleUser: { name: { first: '', last: '' }, location: { city: '' }, picture: { large: '' }, notes: [] },
    isLoading: false
  },

  getters: {
    isLoading (state) {
      return state.isLoading
    },
    allUsers (state) {
      return state.users
    },
    singleUser (state) {
      return state.singleUser
    }
  },

  mutations: {
    loadingState (state, { isLoading }) {
      state.isLoading = isLoading
    },
    recievedUsers (state, data) {
      state.users = data.users
    },
    singleUser (state, { user }) {
      state.singleUser = user
    },
    addNote (state, note) {
      if (state.singleUser.notes) state.singleUser.notes.push(note)
      else {
        const notes = [note]
        state.singleUser.notes = notes
      }
    }
  },

  actions: {
    fetchUsers ({ commit }) {
      commit('loadingState', { isLoading: true })
      usersApi.getAllUsers()
        .then(data => {
          commit('recievedUsers', data)
          commit('loadingState', { isLoading: false })
        })
        .catch(err => console.log(err))
    },
    fetchUserByUsername ({ commit }, { username }) {
      commit('loadingState', { isLoading: true })
      usersApi.getUserByUsername(username)
        .then(data => {
          commit('singleUser', data)
          commit('loadingState', { isLoading: false })
        })
        .catch(err => console.log(err))
    },
    addNoteToUser ({ commit }, { note }) {
      commit('addNote', note)
    }
  }
})
