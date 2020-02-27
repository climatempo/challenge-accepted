const data = require('../base/weather.json')
const app = require('express')()

app.get('/', (req, res) => res.send({
  success: true,
  data
}))
