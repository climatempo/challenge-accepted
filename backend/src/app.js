import express from 'express'
import cors from 'cors'

import 'express-async-errors'

import routes from './routes'
import AppError from './errors/AppError'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

// middleware central de tratamento de erros
app.use((error, request, response, _) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  return response.status(500).json({ message: 'Erro Interno do Servidor' })
})

export default app