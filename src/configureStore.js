import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(
    reducer,
    applyMiddleware(
    	thunkMiddleware,
      loggerMiddleware
    )
  )
}