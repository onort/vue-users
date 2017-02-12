import Vue from 'vue'
import Vuex from 'vuex'

import usersApi from './api/usersApi'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: [],
    singleUser: { name: { first: '', last: '' }, location: { city: '' }, picture: { large: '' } },
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
    fetchUsers (context) {
      context.commit('loadingState', { isLoading: true })
      usersApi.getAllUsers()
        .then(data => {
          context.commit('recievedUsers', data)
          context.commit('loadingState', { isLoading: false })
        })
        .catch(err => console.log(err))
    },
    fetchUserByUsername (context, { username }) {
      context.commit('loadingState', { isLoading: true })
      usersApi.getUserByUsername(username)
        .then(data => {
          context.commit('singleUser', data)
          context.commit('loadingState', { isLoading: false })
        })
        .catch(err => console.log(err))
    },
    addNoteToUser (context, { note }) {
      context.commit('addNote', note)
    }
  }
})
