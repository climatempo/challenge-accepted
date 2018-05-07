var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { city: null });
});

router.post('/', function (req, res, next) {
  const city = req.body.city;

  const locales = require("../assets/base/locales");
  const localeFound = locales.find((locale) => { return locale.name.toLowerCase() === city.toLowerCase(); })

  if (localeFound) {
    const localeWeathers = require("../assets/base/weather");
  
    let weathers = null;
    localeWeathers.map(
      (l) => {
        if (l.locale.name === localeFound.name) {
          weathers = l.weather;
        }       
      }
    );

    res.render('index', { city: localeFound.name, weathers: weathers });
  } else {
    res.render('index', { city: null });
  }

});

module.exports = router;
