const weathers = require('./base/weather.json')
const app = require('express')()

app.get('/by-locale', (req, res) => {
  if (req.query.locale_id) {
    return res.send({
      success: true,
      weathers: weathers.filter((weather) => req.query.locale_id == weather.locale.id)
    })
  }
  return res.send({
    success: false,
    error_code: 400,
    error_message: 'É necessário enviar o parametro localeId'
  })
})

module.exports = app
