import React from 'react';

function WeatherCard({ locale, weather, selectedTemperatureUnit, selectedRainUnit }) {
  return (
    <div className="col-md-4"> {/* Define o tamanho da coluna */}
      <div className="weather-card mb-4">
        <h3>{`${locale.name}, ${locale.state}`}</h3>
        <div className="card">
          <div className="card-body">
            {weather.map((day, index) => (
              <div key={index}>
                <div className="card-header">
                  <p><strong>Data: {day.date}</strong></p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                  <i className="fas fa-arrow-up text-danger"></i> Temperatura Máxima: {day.temperature.max}°{selectedTemperatureUnit}
                  </li>
                  <li className="list-group-item">
                  <i className="fas fa-arrow-down text-primary"></i> Temperatura Mínima: {day.temperature.min}°{selectedTemperatureUnit}
                  </li>
                  <li className="list-group-item">
                  <i className="fas fa-tint text-info"></i> Probabilidade de Chuva: {day.rain.probability}%
                  </li>
                  <li className="list-group-item">
                  <i className="fas fa-umbrella text-success"></i> Quantidade de Chuva: {day.rain.precipitation}{selectedRainUnit}
                  </li>
                  <li className="list-group-item">Descrição: {day.text}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
