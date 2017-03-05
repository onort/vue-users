import express from 'express'
import fs from 'fs'
import middlewares from './middlewares'
import db from './db'

import { ContactRoutes } from './modules'

const app = express()

db()
middlewares(app)

app.use('/api/contacts', ContactRoutes)

app.get('/api/users', (req, res) => {
  usersApi.getUsers().then(users => {
    res.status(200).json({info: 'success', users})
  }).catch(err => res.status(400).json({err}))
})

app.get('/api/user/:username', (req, res) => {
  usersApi.getUserbyUsername(req.params.username).then(user => {
    res.status(200).json({ info: 'sucess', user })
  }).catch(error => res.status(400).json({ info: 'error', error }))
})

app.listen(3000, err => {
  if (err) console.log('Error', err)
  else console.log('Server is running on port 3000')
})

class usersApi {
  static getUsers () {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(fs.readFileSync('./users.json'))
      if (users.length) resolve(users)
      else reject('cant parse users')
    })
  }

  static getUserbyUsername (username) {
    return new Promise((resolve, reject) => {
      this.getUsers().then(users => {
        const user = users.filter(user => user.login.username === username)[0]
        if (user) resolve(user)
        else reject('No such user')
      }).catch(err => reject(err))
    })
  }
}
