import axios from 'axios'

class usersApi {
  static getAllUsers () {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/users')
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }
}

export default usersApi
