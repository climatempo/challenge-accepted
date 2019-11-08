const router = require('express').Router();

const WeatherController = require('./controllers/WeatherController');
const LocaleController = require('./controllers/LocaleController');

router.get('/locale', LocaleController.show);

router.get('/weather/:locale_id/locale', WeatherController.index);

module.exports = router;