import React from 'react'

import './styles.css'

export default function WeatherCard() {
  return (
    <div className="weather-card-container">
      <div className="weather-card-block description">
        <div className="weather-card-date">
          <span>01/02/2017</span>
        </div>
        <p>Sol com algumas nuvens. Chove rápido durante o dia e à noite.</p>
      </div>
      <div className="weather-card-block forecast">
        <div className="weather-card-temperature">
          <div className="max-temperature">
            <i className="thumbnail max"></i>
            <span className="weather-info">20°C</span>
          </div>
          <div className="min-temperature">
            <i className="thumbnail min"></i>
            <span className="weather-info">10°C</span>
          </div>
        </div>
        <div className="weather-card-rain">
          <div className="rain-precipitation">
            <i className="thumbnail precipitation"></i>
            <span className="weather-info">7mm</span>
          </div>
          <div className="rain-probability">
            <i className="thumbnail probability"></i>
            <span className="weather-info">70%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
