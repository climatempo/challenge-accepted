'use strict';

const express = require('express');
const fs = require('fs');

const Locale = require('./lib/locales.js');

const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Content-Type', 'application/json');
  next();
});


app.get('/api', (req, res) => {
  fs.readFile('base/weather.json', (err, data) => {
    if(err) {
      res.status(500).send({ error: err });
    }

    const locale = req.query.locale;

    const findLocale = new Locale();
    const result = findLocale.findWeather(locale, data);
    res.send(JSON.stringify(result));

  });
});

app.listen(PORT, () => {
  console.log('Express Server is listening on port: ' + PORT);
});
