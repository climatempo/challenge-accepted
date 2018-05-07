const router = require("express").Router()
const LocaleController = require("../../app/controllers/LocaleController")
const Checker = require("../../app/middlewares/Checker")

router.get("/cities", Checker.checkCity, LocaleController.getLocale)

module.exports = router
