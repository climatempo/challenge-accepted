const express = require('express')
const app = express()
const indexRoutes = require('./routes/index')
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', indexRoutes)

app.listen(3000, () => { console.log('listening on port 3000...') })
