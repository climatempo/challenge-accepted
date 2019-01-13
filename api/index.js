const app = require('express')()
const consign = require('consign')
const port = process.env.PORT || 5000

consign()
    .include('./config/middlewares.js')
    .then('./controllers')
    .then('./config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log(`Backend executando na porta: ${port}...`)
})