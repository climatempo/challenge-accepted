import React, { createContext, useState } from 'react'

import api from '../services/api'

const WeathersContext = createContext([])

export const WeatherProvider = ({ children }) => {
  const [forecast, setForecast] = useState({})
  const [infoMessage, setInfoMessage] = useState('Nenhuma previsão encontrada')

  async function getForecast(locale) {
    try {
      const response = await api.get(`weathers/${locale}`)
      setForecast(response.data)
      setInfoMessage(
        `Previsão para ${response.data.locale.name} - ${response.data.locale.state}`
      )
    } catch (error) {
      if (error.response.status === 404) {
        setInfoMessage(error.response.data.message)
        setForecast([])
      }
    }
  }

  return (
    <WeathersContext.Provider value={{ forecast, getForecast, infoMessage }}>
      {children}
    </WeathersContext.Provider>
  )
}

export default WeathersContext
