import React from 'react'

import './styles.css'

// import WeatherCard from '../WeatherCard'

// import WeathersContext from '../../contexts/WeathersContext'

export default function WeatherContainer() {
  // const [weathers, setWeathers] = useState([])
  const weathers = []

  return (
    <div id="weather-container">
      <div className="forecast-info">
        <span>Previsão para Osasco - SP</span>
      </div>
      {weathers && weathers.length > 0 ? (
        <div className="weather-cards"></div>
      ) : (
        <div id="weather-not-found">
          <span>Nenhuma previsão encontrada</span>
        </div>
      )}
    </div>
  )
}
