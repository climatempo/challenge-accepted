import { Router } from 'express'

import LocaleController from '../controllers/LocaleController'

const localeRoutes = Router()

const localeController = new LocaleController()

localeRoutes.get('/', localeController.getAllLocales)
localeRoutes.get('/:name', localeController.getLocaleByName)

export default localeRoutes