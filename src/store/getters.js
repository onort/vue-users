const getters = {
  isLoading (state) {
    return state.isLoading
  },
  allUsers (state) {
    return state.users
  },
  singleUser (state) {
    return state.singleUser
  },
  isMenuVisible (state) {
    return state.menuVisible
  }
}

export default getters
