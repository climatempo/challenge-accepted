import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducer'

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(
    reducer,
    applyMiddleware(
      loggerMiddleware
    )
  )
}