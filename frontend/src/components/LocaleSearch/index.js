import React, { useState } from 'react'

import './styles.css'

export default function LocaleSearch() {
  const [locale, setLocale] = useState('')

  function searchWeather(locale) {
    if (locale) {

    }
  }

  return (
    <div id="search-container">
      <input
        type="text"
        value={locale}
        onChange={e => setLocale(e.target.value)}
      />
      <button
        id="search-icon"
        type="button"
        onClick={() => searchWeather(locale)}
      ></button>
    </div>
  )
}
