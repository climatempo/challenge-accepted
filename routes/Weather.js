/**
 *       Tratamento das rotas de weather
 */

const express = require("express"),
	  app = express(),
	  path = require("path"),
	  weather = require("../db/weather.js");

/**
 *  Pegar previsao de uma localidade
 */
app.get("/", function(req, res) {
    var name = req.query.name;
    console.log(name);
    var data = weather.findByName(name);
    res.json(data);
});


module.exports = app;
