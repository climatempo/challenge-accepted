import React, { useContext, useState } from 'react'

import WeathersContext from '../../contexts/WeathersContext'

import './styles.css'

export default function LocaleSearch() {
  const [locale, setLocale] = useState('')
  const { getForecast } = useContext(WeathersContext)

  function handleSearchForecast() {
    if (locale) {
      getForecast(locale)
    }
  }

  return (
    <div id="search-container">
      <input
        type="text"
        value={locale}
        onKeyPress={e => {
          if (e.key === 'Enter') handleSearchForecast()
        }}
        onChange={e => setLocale(e.target.value)}
      />
      <button
        id="search-icon"
        type="button"
        onClick={() => handleSearchForecast()}
      ></button>
    </div>
  )
}
