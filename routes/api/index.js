const router = require("express").Router()
const locales = require("./locales")
const weathers = require("./weathers")

router.use("/locales", locales)
router.use("/weathers", weathers)

module.exports = router
