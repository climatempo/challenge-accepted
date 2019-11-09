const routes = require('express').Router();

const weatherController = require('./app/Controllers/weatherController');
const localesControllerv = require('./app/Controllers/localesController');

routes.get('/weather/:id', weatherController.show);
routes.get('/locales', localesControllerv.index);
routes.get('/locales/city', localesControllerv.show);

module.exports = routes;
