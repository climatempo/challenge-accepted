/* eslint-disable arrow-parens */
const express = require('express');

const api = express();

const locales = require('./data/locales.json');
const weather = require('./data/weather.json');

api.get('/locale/:name?', (req, res) => {
  if (req.params.name) {
    const regex = new RegExp(`^${req.params.name.toLowerCase()}`);
    const data = locales.filter(loc => loc.name.toLowerCase().match(regex));
    return res.status(200).json(data);
  }
  return res.status(200).json(locales);
});

api.get('/weather/:id?', async (req, res) => {
  if (!req.params.id) return res.status(400).json({ err: 'Insira o id!' });
  const data = weather.find(x => x.locale.id === parseInt(req.params.id, 10));
  return res.status(200).json(data ? { weather: data.weather, locale: data.locale} : {});
});

module.exports = api;
