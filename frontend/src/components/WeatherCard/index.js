import React from 'react'

import './styles.css'

export default function WeatherCard({ weather }) {
  function formatDate(date) {
    return date.split('-').reverse().join('/')
  }

  return (
    <div className="weather-card-container">
      <div className="weather-card-block description">
        <div className="weather-card-date">
          <span>{formatDate(weather.date)}</span>
        </div>
        <p>{weather.text}</p>
      </div>
      <div className="weather-card-block forecast">
        <div className="weather-card-temperature">
          <div className="max-temperature">
            <i className="thumbnail max"></i>
            <span className="weather-info">{weather.temperature.max}°C</span>
          </div>
          <div className="min-temperature">
            <i className="thumbnail min"></i>
            <span className="weather-info">{weather.temperature.min}°C</span>
          </div>
        </div>
        <div className="weather-card-rain">
          <div className="rain-precipitation">
            <i className="thumbnail precipitation"></i>
            <span className="weather-info">{weather.rain.precipitation}mm</span>
          </div>
          <div className="rain-probability">
            <i className="thumbnail probability"></i>
            <span className="weather-info">{weather.rain.probability}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
