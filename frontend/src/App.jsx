/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Header from './components/Header';

import localesJSON from './assets/locales.json';
import weatherJSON from './assets/weather.json';

import searchIcon from './assets/search.png';
import './styles/global.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const [locale, setLocale] = useState();
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState();

  function handleSearch(formData) {
    formData.preventDefault();

    const searchValue = formData.target.elements.inputSearch.value;

    const findLocale = localesJSON.find(
      localeItem => localeItem.name.toLowerCase() === searchValue.toLowerCase(),
    );
    setLocale(findLocale);
    if (findLocale) {
      const weatherFromLocale = weatherJSON.find(
        weatherItem => weatherItem.locale.id === findLocale.id,
      );
      setWeather(weatherFromLocale);
    }
  }

  return (
    <>
      <Header />
      <div className="containerInput">
        <form onSubmit={handleSearch}>
          <input placeholder="Digite uma localização" name="inputSearch" />
          <button type="submit">
            <img src={searchIcon} alt="search icon" />
          </button>
        </form>
      </div>

      <main>
        {locale ? (
          <>
            <div>
              <span>{`Previsão para ${locale.name} - ${locale.state}`}</span>
            </div>
            <div>
              {weather.weather.map(weatherItem => (
                <WeatherCard weather={weatherItem} />
              ))}
            </div>
          </>
        ) : (
          <div>
            <p>Sem resultados, faça uma nova busca</p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
