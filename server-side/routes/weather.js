const express = require('express');
const router = express.Router();
const Weather = require('../model/Weather');

router.get("/", async (req, res, next) => {
  Weather.find({}).then(weatherList => {
    res.status(200).json(weatherList)
  })
})

router.get("/:locale", async (req, res, next) => {
  let findLocale = req.params.locale;
  let locales = await Weather.findOne({"locale.name" : {'$regex' : (findLocale), $options: 'i'}}).collation({locale : 'pt', strength: 1})
  res.status(200).json(locales)
})


module.exports = router