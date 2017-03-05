import usersApi from '../api/usersApi'

const actions = {
  fetchContacts ({ commit }) {
    commit('loadingState', { isLoading: true })
    usersApi.getAllContacts()
      .then(data => {
        commit('receivedContacts', data)
        commit('loadingState', { isLoading: false })
      })
      .catch(err => console.log(err))
  },
  fetchContactByUsername ({ commit }, { username }) {
    commit('loadingState', { isLoading: true })
    usersApi.getContactByUsername(username)
      .then(data => {
        commit('singleContact', data)
        commit('loadingState', { isLoading: false })
      })
      .catch(err => console.log(err))
  },
  addNoteToContact ({ commit }, { note }) {
    commit('addNote', note)
  },
  toggleMenu ({ commit }, close) {
    commit('toggleMenu', close)
  }
}

export default actions
