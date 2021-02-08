'use strict';

var express = require("express");
var app = express();
const fs = require('fs');

const port = 8000;

const locales = JSON.parse(fs.readFileSync('data/locales.json'));
const weather = JSON.parse(fs.readFileSync('data/weather.json'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/fetch_prediction", (req, res, next) => {

    let cityID = req.query.id
    let result = weather.filter(obj => {
        return obj.locale.id == cityID
    })

    if (result.length == 0) {
        res.status(404).send('Cidade não disponível');
        return
    }
    res.json(result);
});

app.get("/available_cities", (req, res, next) => {
    res.json(locales.map(elem => ({
        id: elem.id,
        name: elem.name,
        lat: elem.latitude,
        long: elem.longitude
    })));
});

app.listen(process.env.PORT || port);