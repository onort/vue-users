import axios from 'axios'

class usersApi {

  static async getAllContacts () {
    return await axios.get('http://localhost:3000/api/contacts')
      .then(res => res.data)
      .catch(err => err)
  }

  static async getContactByUsername (username) {
    return await axios.get(`http://localhost:3000/api/contact/${username}`)
      .then(res => res.data)
      .catch(err => err)
  }
}

export default usersApi
