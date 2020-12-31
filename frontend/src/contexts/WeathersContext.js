import { createContext } from 'react'

const WeathersContext = createContext([])

export const WeatherProvider = ({ children }) =>  (
  <WeathersContext.Provider value={[]}>
  </WeathersContext.Provider>
)

export default WeathersContext
