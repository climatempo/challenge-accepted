const router = require("express").Router()
const WeatherController = require("../../app/controllers/WeatherController")

router.get("/", WeatherController.getWeather)

module.exports = router
