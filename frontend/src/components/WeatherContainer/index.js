import React, { useContext } from 'react'

import './styles.css'

import WeatherCard from '../WeatherCard'

import WeathersContext from '../../contexts/WeathersContext'

export default function WeatherContainer() {
  const { infoMessage, forecast } = useContext(WeathersContext)

  return (
    <div id="weather-container">
      {!!infoMessage && (
        <div className="forecast-info">
          <span>{infoMessage}</span>
        </div>
      )}
      {forecast?.weather && (
        <div className="weather-cards">
          {forecast.weather.map((weather, index) => (
            <WeatherCard key={index} weather={weather} />
          ))}
        </div>
      )}
    </div>
  )
}
