var express = require('express');
var router = express.Router();

var localesService = require('../services/locales-service');
var forecastService = require('../services/forecast-service');

router.get('/locales', (req, res, next) => {
  localesService.findLocaleByName(req.query.q).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.statusCode = 500;
    res.json({"message": err.message});
  });
});

router.get('/forecast/:localeId', (req, res, next) => {
  forecastService.findForecastByLocale(req.params.localeId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.statusCode = 500;
    res.json({"message": err.message});
  });
});

module.exports = router;
