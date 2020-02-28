const express = require('express')
const { Nuxt } = require('nuxt')
const app = express()
const api = require('../api')

const config = require('../../nuxt.config.js')

const nuxt = new Nuxt(config)

const { host, port } = nuxt.options.server

app.use('/api', api)

app.listen(port, host)

module.exports.baseUrl = `http://${host}:${port}/api`
