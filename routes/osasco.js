'use strict';

const express = require('express');
const router = express.Router();
const weather = require('../controller/catchWeather');
let local = 'Osasco';
let debug = [], date = [], text = [], min = [], max = [], proba = [], precip = [];

router.get('/', function(req, res, next){
    weather.call(debug, date, text, min, max, proba, precip, local);

    res.render('index', { local: local, date: date, text: text, min: min, max: max, proba: proba, precip: precip });

    date.length = 0, text.length = 0, min.length = 0, max.length = 0, proba.length = 0, precip.length = 0;
})

module.exports = router;
