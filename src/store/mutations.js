const mutations = {
  loadingState (state, { isLoading }) {
    state.isLoading = isLoading
  },
  receivedContacts (state, { contacts }) {
    state.contacts = contacts
  },
  singleContact (state, { contact }) {
    state.singleContact = contact
  },
  addNote (state, note) {
    if (state.singleContact.notes) state.singleContact.notes.push(note)
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
