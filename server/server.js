import express from 'express'
import middlewares from './middlewares'
import db from './db'

import { ContactRoutes } from './modules'

const app = express()

db()
middlewares(app)

app.use('/api', ContactRoutes)

app.listen(3000, err => {
  if (err) console.log('Error', err)
  else console.log('Server is running on port 3000')
})
