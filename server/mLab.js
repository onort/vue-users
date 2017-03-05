import mongoose from 'mongoose'
import { username, password } from './dbCreds'

export default () => {
  mongoose.Promise = global.Promise
  mongoose.connect(`mongodb://${username}:${password}@ds119370.mlab.com:19370/vuecontacts`)
  mongoose.connection
    .once('open', () => console.log('mLab running'))
    .on('error', err => console.log('Error', err))
}
