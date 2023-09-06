import React, { useState, useEffect} from 'react';
import UnitSelection from './components/UnitSelection';
import LocationAutocomplete from './components/LocationAutocomplete';
import WeatherCard from './components/WeatherCard';
import './App.css';
import logoImage from './logo-white.png';
 
function App() {
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState('celsius');
  const [selectedRainUnit, setSelectedRainUnit] = useState('mm');
  const [forecastData, setForecastData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInitialForecastData() {
    try {
      if(selectedCity) {
      setLoading(true);
      const response = await fetch(`https://climatempo-talent.rj.r.appspot.com/weatherforecast?city_id=${selectedCity.id}&unit_temperature=${selectedTemperatureUnit}&unit_precipitation=${selectedRainUnit}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da previsão do tempo.');
      }
      const data = await response.json();
      setForecastData(data);
    }
    } catch (error) {
      setError(error.message || 'Erro desconhecido');
    } finally {
      setLoading(false); // Esconder indicador de carregamento
    }
  }
    fetchInitialForecastData();
  }, [selectedCity, selectedTemperatureUnit, selectedRainUnit]);

  const handleLocationSelect = (selectedLocation) => {
    setSelectedCity(selectedLocation); // Atualizar o estado com a cidade escolhida
    setError(null); // Limpar erros
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-md custom-bg-color">
      <div className="conteiner-fluid d-flex justify-content-center align-items-center">
          <a href="#" className="brand-logo">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </a>
            </div>
          </nav>
      <UnitSelection
        selectedTemperatureUnit={selectedTemperatureUnit}
        selectedRainUnit={selectedRainUnit}
        onUnitChange={(unitType, unitValue) => {
          if (unitType === 'temperature') {
            setSelectedTemperatureUnit(unitValue);
          } else if (unitType === 'rain') {
            setSelectedRainUnit(unitValue);
          }
        }}
      />
      <main className='container'>
        <div className='jumbotron'>
        <h1>Verifique agora a previsão do tempo da sua cidade!</h1>
        <p className='lead'>Digite o nome da sua cidade no campo abaixo em seguida clique em <strong>Pesquisar</strong></p>
        </div>
      </main>
      <LocationAutocomplete onLocationSelect={handleLocationSelect} />
      {selectedCity ? (
      <div className="weather-cards">
        {forecastData.map((forecast, index) => (
          <WeatherCard
            key={index}
            locale={forecast.locale}
            weather={forecast.weather}
            selectedTemperatureUnit={selectedTemperatureUnit}
            selectedRainUnit={selectedRainUnit}
          />
        ))}
      </div>
      ): null}
    </div>
  );
}

export default App;