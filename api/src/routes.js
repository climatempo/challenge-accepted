const express = require("express");

const LocaleController = require("./controllers/LocaleController");
const WeatherController = require("./controllers/WeatherController");

const routes = express.Router();

routes.get("/locale", LocaleController.index);
routes.get("/locale/:localeId/weather", WeatherController.index);

module.exports = routes;
