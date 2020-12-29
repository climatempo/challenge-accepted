import app from './app'

const port = process.env.SERVER_PORT || 3000

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})