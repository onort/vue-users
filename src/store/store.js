import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLoading: false,
    menuVisible: false,
    singleContact: { name: { first: '', last: '' }, location: { city: '' }, picture: '', notes: [] },
    contacts: []
  },
  getters,
  mutations,
  actions
})
