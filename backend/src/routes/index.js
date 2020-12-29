import { Router } from 'express'

import weatherRoutes from './weather.routes'
import localeRoutes from './locale.routes'

const routes = Router()

routes.use('/weathers', weatherRoutes)
routes.use('/locales', localeRoutes)

export default routes