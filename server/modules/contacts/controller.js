import Contact from './model'

export const getAllContacts = async (req, res) => {
  try {
    return res.status(200).json({ contacts: await Contact.find({}) })
  } catch (e) {
    return res.status(400).json({ error: true, e })
  }
}

export const getContactByUsername = async (req, res) => {
  const { username } = req.params
  try {
    return res.status(200).json({ contact: await Contact.findOne({ username }) })
  } catch (e) {
    return res.status(400).json({ error: true, e })
  }
}
