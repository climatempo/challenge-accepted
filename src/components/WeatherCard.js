import React from 'react';

function WeatherCard({ locale, weather, selectedTemperatureUnit, selectedRainUnit }) {
  return (
    <div className="weather-card">
      <h3>{`${locale.name}, ${locale.state}`}</h3>
      {weather.map((day, index) => (
        <div key={index}>
          <p>Data: {day.date}</p>
          <p>Temperatura Máxima: {day.temperature.max}{selectedTemperatureUnit}°C</p>
          <p>Temperatura Mínima: {day.temperature.min}{selectedTemperatureUnit}°C</p>
          <p>Probabilidade de Chuva: {day.rain.probability}%</p>
          <p>Quantidade de Chuva: {day.rain.precipitation}{selectedRainUnit}</p>
          <p>Descrição: {day.text}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default WeatherCard;
