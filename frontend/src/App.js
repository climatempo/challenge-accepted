import React from 'react'

import './styles/global.css'

import Header from './components/Header'
import LocaleSearch from './components/LocaleSearch'
import WeatherContainer from './components/WeatherContainer'

import WeathersContext from './contexts/WeathersContext'

function App() {
  return (
    <WeathersContext.Provider value="">
      <Header />
      <LocaleSearch />
      <WeatherContainer />
    </WeathersContext.Provider>
  )
}

export default App
