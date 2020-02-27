const locales = require('./locales')
const weather = require('./weather')
const app = require('express')()

app.use('/locales', locales)

app.use('./weather', weather)

module.exports = app
