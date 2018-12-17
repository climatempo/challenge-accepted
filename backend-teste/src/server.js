
const port = process.env.port || 3003

const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./middleware/cors')
const server = express()
const rota = require('./router')

server.use(allowCors)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())


server.use('/api', rota)

server.listen(port, () => {
  console.log(`running on ${port}`)
})