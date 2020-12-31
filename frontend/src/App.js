import React from 'react'

import './styles/global.css'

import Header from './components/Header'
import LocaleSearch from './components/LocaleSearch'
import WeatherContainer from './components/WeatherContainer'

import { WeatherProvider } from './contexts/WeathersContext'

function App() {
  return (
    <WeatherProvider>
      <Header />
      <LocaleSearch />
      <WeatherContainer />
    </WeatherProvider>
  )
}

export default App
