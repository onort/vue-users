import { Router } from 'express'
import * as ContactsController from './controller'

const routes = new Router()

routes.get('/', ContactsController.getAllContacts)

export default routes
