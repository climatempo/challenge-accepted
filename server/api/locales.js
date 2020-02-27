const data = require('./base/locales.json')
const app = require('express')()

app.get('/', (req, res) => res.send({
  success: true,
  data
}))

module.exports = app
