import React, { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import NameCity from './components/NameCity/NameCity'
import api from './services/api'
import dayjs from 'dayjs';




export default function App() {
  const [forecastCity, setForecastCity] = useState({})
  const [city, setCity] = useState({})

  const citySelected = (option) => {
    api.get(`/forecast?id=${option.id}`).then((response) => {
      setForecastCity(response.data)
      setCity(option)
    })
  }

  return (
    <div className='App'>
      <Header/>
      <Search onSelect={citySelected}/>
      <NameCity city={city}/>
      {forecastCity.weather && 
        forecastCity.weather.map((data, index) => {
          return (
            <Card 
              date={dayjs(data.date).format('DD/MM/YYYY')} 
              temMax={data.temperature.max} 
              temMin={data.temperature.min} 
              chuva={data.rain.precipitation} 
              probabilidade={data.rain.probability} 
              txt={data.text}
              key={index}
            />
          )
        })
      }
    </div>
  )
}; 
