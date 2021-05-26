const express = require('express');
const routes = express.Router();
const LocalesController = require('./app/controller/LocalesController');
const WeatherController = require('./app/controller/WeatherController');

routes.get('/', function(req, res) {
  return res.send('Minha primeira rota!');
});

routes.get('/locales', LocalesController.index);

routes.get('/weather', WeatherController.index);

module.exports = routes;