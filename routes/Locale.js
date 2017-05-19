/**
 *       Tratamento das rotas de weather
 */

const express = require("express"),
	  app = express(),
	  path = require("path"),
	  locale = require("../db/locale.js");

/**
 *  Pegar todas as localidades
 */
app.get("/", function(req, res) {
    res.json(locale.locale);
});


module.exports = app;
