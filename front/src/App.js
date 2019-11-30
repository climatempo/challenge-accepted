import React, { useState } from 'react';
import "./App.css"

function App() {
  const [find, setFind] = useState("")
  const [state, setState] = useState(false)
  const [cities, setCities] = useState([])
  const [cards, setCards] = useState(null)
  
  const changeCheckBox = () => setState(!state)
  
  /**
   * Returns a valid url properly mounted to perform a request.
   */
  const getUrl = () => {
    if(!find) {
      return `http://localhost:3030/locales`
    } 
      return `http://localhost:3030/${state ? "state?state=" : "locale?name="}${find}`
    
  }

  /**
   * Performs a search in the backend api to collect city information
   * by name or by state name.
   */
  const search = () => {
    setCards(null)

    fetch(getUrl())
      .then(async result => {
        const json = await result.json()
        if(!json.data) {
          alert("No results.")
          return
        }

        if(Array.isArray(json.data))
          setCities(json.data)
        else {
          setCities([ json.data ])
        }
      })
  }

  /**
   * Performs a request to the backend in order to collect the weather
   * information of a city. The response is stored into the cards object,
   * to then be rendered.
   * 
   * @param {string} id Id of a city (locale)
   */
  const mountCards = (id) => {
    const url = `http://localhost:3030/weather?locale=${id}`

    fetch(url)
      .then(async result => {
        const json = await result.json()

        if(!json.data) {
          alert("No measurement found.")
          
        } else {
          setCards(json.data)
        }
      })
  }

  /**
   * Renders the city divs in the screen when a search is performed and the
   * array cities is mounted.
   * 
   * @param {object} city City object
   */
  const renderCities = (city) => {
    return (
      <div onClick={() => mountCards(city.id)} key={city.id}>
        <h4 className="city">
          {city.name}
          {' '}
- 
          {' '}
          {city.state}
        </h4>
      </div>
    )
  }

  /**
   * Renders the cards on the screen only when the object cards is properly
   * mounted.
   */
  const renderCards = () => {
    return (
      <div>
        <h4>
          Previsão para {cards.locale.name}
        </h4>
        <div className="card-container">
          {
        cards.weather.map(weather => {
          return (
            <div className="card" key={weather.date}>
              <div className="card-title">
                <p>
                  {weather.date}
                </p>
                <small>{weather.text}</small>
              </div>
              <div className="card-body">
                <div className="card-body-row">
                  <div className="card-body-item">
                    <img alt="max" src={require("./images/icons/upload.png")} /> 
                    {weather.temperature.max}
                    {' '}
°C
                  </div>
                  <div className="card-body-item">
                    <img alt="precipitation" src={require("./images/icons/raindrop-close-up.png")} /> 
                    {weather.rain.precipitation}
mm
                  </div>
                </div>
                <div className="card-body-row">
                  <div className="card-body-item">
                    <img alt="min" src={require("./images/icons/download.png")} /> 
                    {weather.temperature.min}
                    {' '}
°C
                  </div>
                  <div className="card-body-item">
                    <img alt="probability" src={require("./images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png")} /> 
                    {weather.rain.probability}
%
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
        </div>
      </div>
    )
  } 

  return (
    <div className="App">
      <header className="App-header">
        <div className="search-bar">
          <input value={find} onChange={e => setFind(e.target.value)} type="text" placeholder="Pesquisar..." />
          <button onClick={search}>Buscar</button>
        </div>
        <input onChange={changeCheckBox} checked={state} type="checkbox" />
        {' '}
Pesquisar por estado
      </header>
      <main>
        {// If cards is mounted, means that we have to show weather information.
          cards
          ? renderCards()
          : cities.map(renderCities)
        }
      </main>
    </div>
  );
}

export default App;
