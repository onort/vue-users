const getters = {
  isLoading (state) {
    return state.isLoading
  },
  allContacts (state) {
    return state.contacts
  },
  singleContact (state) {
    return state.singleContact
  },
  isMenuVisible (state) {
    return state.menuVisible
  }
}

export default getters
