import React, { useState } from 'react';
import './App.css';
import logo from './logo-white.svg';
import max from './images/icons/arrow-up.png';
import min from './images/icons/arrow-down.png';
import humdt from './images/icons/humidity.png';
import wind from './images/icons/wind.png';

const api = {
  key: '805dc42f0499d489bb1f20c90ea3c902',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event === 'Enter') {
      fetch(
        `${api.base}weather?q=${query}&units=metric&lang={pt_br}&APPID=${api.key}`
      )
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  const dateBuilder = dt => {
    let months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    let days = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];
    let day = days[dt.getDay()];
    let date = dt.getDate();
    let month = months[dt.getMonth()];
    let year = dt.getFullYear();

    console.log(day, date, month, year);

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <header className="header">
          <img src={logo} alt="" />
        </header>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Nome da Cidade..."
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={event => search(event.key)}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                <p className="temp-now">{Math.round(weather.main.temp)} ºC</p>
                <p className="condition">{weather.weather[0].main}</p>
                <p className="temp-max-min">
                  <img src={max} className="max-svg" alt="max" />{' '}
                  {Math.round(weather.main.temp_max)}º C{' '}
                  <img src={min} className="min-svg" alt="min" />{' '}
                  {Math.round(weather.main.temp_min)}º C
                </p>
                <p className="humdt-txt">
                  <img src={humdt} className="humidity-svg" alt="" />
                  {weather.main.humidity}%
                  <img src={wind} className="wind-svg" alt="" />{' '}
                  {weather.wind.speed}m/s
                </p>
                <p></p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default App;
