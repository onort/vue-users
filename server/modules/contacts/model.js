import mongoose, { Schema } from 'mongoose'

const contactSchema = new Schema({
  gender: String,
  email: String,
  dob: String,
  registered: String,
  phone: String,
  cell: String,
  picture: String,
  username: String,
  notes: Array,
  location: Object,
  name: Object
})

export default mongoose.model('Contact', contactSchema, 'contacts')
