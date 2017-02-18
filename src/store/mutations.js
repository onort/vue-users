const mutations = {
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
  },
  toggleMenu (state, close) {
    if (close) {
      state.menuVisible = false
      return
    }
    state.menuVisible = !state.menuVisible
  }
}

export default mutations
