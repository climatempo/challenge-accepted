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
                  <p>Data: {day.date}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Temperatura Máxima: {day.temperature.max}{selectedTemperatureUnit}
                  </li>
                  <li className="list-group-item">
                    Temperatura Mínima: {day.temperature.min}{selectedTemperatureUnit}
                  </li>
                  <li className="list-group-item">
                    Probabilidade de Chuva: {day.rain.probability}%
                  </li>
                  <li className="list-group-item">
                    Quantidade de Chuva: {day.rain.precipitation}{selectedRainUnit}
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
