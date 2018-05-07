const router = require("express").Router()
const WeatherController = require("../../app/controllers/WeatherController")
const Checker = require("../../app/middlewares/Checker")

router.get("/", Checker.checkCityId, WeatherController.getWeather)

module.exports = router
