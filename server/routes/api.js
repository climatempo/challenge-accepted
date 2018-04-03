const express = require('express');
const router = express.Router();
const path = require('path');

// depenencias db
const jsonFile = require('jsonfile');
// locations file
const locationsDb = path.join(path.resolve('.'), 'base', 'locales.json');
const weatherDb = path.join(path.resolve('.'), 'base', 'weather.json');

var locationsData, weatherData;

jsonFile.readFile(locationsDb, function(err, obj) {
  console.log('Carregando locations de', locationsDb);
  if (err) {
    throw err;
  }
  locationsData = obj;
});
jsonFile.readFile(weatherDb, function(err, obj) {
  console.log('Carregado wether de', weatherDb);
  if (err) {
    throw err;
  }
  weatherData = obj;
});


// get api base
router.get('/', (req, res) => {
  res.send('climatempo::weather::api (y)');
});

// get locations
router.get('/location', (req, res) => {
  var jsonPath = require('jsonpath');
  res.status(200).json(jsonPath.query(locationsData, '$..name'));
});

// get weathers
router.get('/weather', (req, res) => {
  res.status(200).json(weatherData);
});

// get weather especifico by location name
router.get('/weather/:location', (req, res) => {
  const jsonPath = require('jsonpath');
  const data = jsonPath.query(weatherData, `$[?(@.locale.name == '${req.params.location}')]`);
  if (data.length) {
    res.status(200).json(data);
  } else {
    res.status(404).send('Not found');
  }
});

module.exports = router;
