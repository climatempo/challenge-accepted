var express = require('express')
var router = express.Router()
const Weather = require('../public/resources/js/db.js')

// function to be used in the .get("/weather", ..) route
// this allows us to escape any special characters with a backslash
function escapeRegex (text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

router.get('/', (req, res) => {
  if (req.query.keyword) {
    const regex = new RegExp(escapeRegex(req.query.keyword), 'gi')
    const weather = Weather.getWeather(regex)
    res.json(weather)
  } else {
    const weather = []
    if (req.xhr) {
      res.json(weather)
    } else {
      res.render('index', {weather: weather})
    }
  }
})

module.exports = router
