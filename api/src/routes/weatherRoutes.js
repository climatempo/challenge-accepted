const express = require('express');

const { wrapAsync } = require('../utils/wrapFn');

const validatorMiddleware = require('../middlewares/requestValidator');

const weatherController = require('../controllers/weatherController');

const { getWeatherRules } = require('../validations/weatherValidation');

const router = express.Router();

router.get(
  '/',
  getWeatherRules,
  validatorMiddleware,
  wrapAsync(weatherController.getWeather)
);

module.exports = router;
