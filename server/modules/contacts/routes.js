import { Router } from 'express'
import * as ContactsController from './controller'

const routes = new Router()

routes.get('/contacts', ContactsController.getAllContacts)
routes.get('/contact/:username', ContactsController.getContactByUsername)

export default routes
