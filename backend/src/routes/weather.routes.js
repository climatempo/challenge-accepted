import { Router } from 'express'

import WeatherController from '../controllers/WeatherController'

const weatherRoutes = Router()

const weatherController = new WeatherController()

weatherRoutes.get('/', weatherController.getAllWeathers)
weatherRoutes.get('/:location', weatherController.getWeatherByLocation)

export default weatherRoutes