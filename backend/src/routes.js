const { Router } = require('express');
const LocaleController = require('./controllers/LocaleController');
const WeatherController = require('./controllers/WeatherController');

const routes = Router();

/**
 *  @Routes
 */

routes.get('/locales', LocaleController.index);

routes.get('/weathers/:locale', WeatherController.index);

module.exports = routes;