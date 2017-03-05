import Contact from './model'

export const getAllContacts = async (req, res) => {
  try {
    return res.status(200).json({ contacts: await Contact.find({}) })
  } catch (e) {
    return res.status(400).json({ error: true, e })
  }
}
