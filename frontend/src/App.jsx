import React, { useState, useEffect } from 'react'

import useLocalStorage from "use-local-storage";
import "./App.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import NameCity from "./components/NameCity/NameCity";
import api from "./services/api";
import dayjs from 'dayjs';
import Loading from "./components/Loading/Loading"


export default function App() {
  const [forecastCity, setForecastCity] = useLocalStorage('forecastCity', {})
  const [city, setCity] = useLocalStorage('city', {})
  const [temperature, setTemperature] = useState('C')
  const [precipitation, setPrecipitation] = useState('mm')
  const [optionCityId, setOptionCityId] = useState(0)
  const [optionCityName, setOptionCityName] = useState('')


  const citySelected = (option) => {
    if (!option) return;
    api.get(`/forecast?id=${option.id}&temperatureUnit=${temperature}&precipitationUnit=${precipitation}`)
      .then((response) => {
        setForecastCity(response.data)
        setCity(option)
      })
  }

  const getForecastByCityName = (cityName) => {
    if (!cityName) return;
    api.get(`/forecast?cityName=${cityName}&temperatureUnit=${temperature}&precipitationUnit=${precipitation}`)
      .then((response) => {
        setForecastCity(response.data)
        setCity(response.data.locale)
      })
  }

  useEffect(() => {
    if (optionCityId === 0) return;

    const fetchForecast = async () => {
      const response = await api.get(`/forecast?id=${optionCityId}&temperatureUnit=${temperature}&precipitationUnit=${precipitation}`)
      setForecastCity(response.data)
      setCity(response.data.locale)
    }
    fetchForecast();
  }, [temperature])

  useEffect(() => {
    if (optionCityName === '') return;
    const fetchForecast = async () => {
      const response = await api.get(`/forecast?cityName=${optionCityName}&temperatureUnit=${temperature}&precipitationUnit=${precipitation}`)
      setForecastCity(response.data)
      setCity(response.data.locale)
    }
    fetchForecast();
  }, [precipitation])

  const handleClearSearch = () => {
    setForecastCity({})
    setCity('')
  }
  return (
    <div className='App'>
      <Header setPrecipitation={setPrecipitation} setTemperature={setTemperature} />
      <Search onSelect={citySelected} setOptionCityId={setOptionCityId} setOptionCityName={setOptionCityName} onClickSearchButton={getForecastByCityName} />
      <NameCity city={city} clearSearch={handleClearSearch} />
      
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
