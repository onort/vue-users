import usersApi from '../api/usersApi'

const actions = {
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
  },
  toggleMenu ({ commit }, close) {
    commit('toggleMenu', close)
  }
}

export default actions
