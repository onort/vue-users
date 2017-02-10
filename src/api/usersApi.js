import axios from 'axios'

class usersApi {
  static getAllUsers () {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/users')
        .then(res => {
          console.log(res.data)
        })
    })
  }
}

export default usersApi
