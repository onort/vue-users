import axios from 'axios'

class usersApi {
  static getAllUsers () {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/users')
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }

  static getUserByUsername (username) {
    console.log('Api logs username', username)
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:3000/api/user/${username}`)
        .then(res => {
          console.log(res.data)
          resolve(res.data)
        })
        .catch(err => reject(err))
    })
  }
}

export default usersApi
