import React, { useState } from 'react'
import "./App.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import NameCity from "./components/NameCity/NameCity";
import UnitSelection from "./components/UnitSelection/UnitSelection";
import api from "./services/api";
import dayjs from 'dayjs';


export default function App() {
  const [forecastCity, setForecastCity] = useState({})
  const [city, setCity] = useState({})
  const [temperature, setTemperature] = useState('C')
  const [precipitation, setPrecipitation] = useState('mm')

  const citySelected = (option) => {
    api.get(`/forecast?id=${option.id}&temperatureUnit=${temperature}&precipitationUnit=${precipitation}`)
      .then((response) => {
      setForecastCity(response.data)
      setCity(option)
    })
  }

  return (
    <div className='App'>
      <Header/>
      <Search onSelect={citySelected}/>
        <div>
          <div className='units'>
            <span>Unidade de temperatura:</span>
            <UnitSelection options={['C', 'F']} onSelect={setTemperature}/>
          </div>
          <div className='units'>
            <span>Unidade de precipitação:</span>
            <UnitSelection options={['mm', 'inch']} onSelect={setPrecipitation}/>
          </div>
        </div>
      <NameCity city={city}/>
      {forecastCity.weather && 
        forecastCity.weather.map((data, index) => {
          return (
            <Card 
              date={dayjs(data.date).format('DD/MM/YYYY')} 
              temMax={data.temperature.max} 
              temMin={data.temperature.min} 
              precipitation={data.rain.precipitation} 
              probability={data.rain.probability}
              temUnit={forecastCity.units.temperature}
              precUnit={forecastCity.units.precipitation}
              txt={data.text}
              key={index}
            />
          )
        })
      }
    </div>
  )
}; 
