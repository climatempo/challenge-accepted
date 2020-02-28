const locales = require('./base/locales.json')
const app = require('express')()

app.get('/', (req, res) => {
  // Filtra as cidades baseado no paremetro q
  let data = locales
  if (req.query.q) {
    data = locales.filter((locale) => (
      (new RegExp(req.query.q.toLowerCase())).test(locale.name.toLowerCase())
    ))
  }
  return res.send({
    success: true,
    locales: data
  })
})

module.exports = app
