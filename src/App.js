import React, { useState, useEffect} from 'react';
import UnitSelection from './components/UnitSelection';
import LocationAutocomplete from './components/LocationAutocomplete';
import WeatherCard from './components/WeatherCard';
import './App.css';

 
function App() {
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState('celsius');
  const [selectedRainUnit, setSelectedRainUnit] = useState('mm');
  const [forecastData, setForecastData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleLocationSelect = (selectedLocation) => {
    setSelectedCity(selectedLocation); // Atualizar o estado com a cidade escolhida
    fetchForecastData(selectedLocation.id); // Buscar dados da previsão do tempo para a cidade
  };

  useEffect(() => {
    async function fetchForecastData() {
      try {
        const response = await fetch(`https://climatempo-talent.rj.r.appspot.com/weatherforecast?city_id=3735&unit_temperature=${selectedTemperatureUnit}&unit_precipitation=${selectedRainUnit}`);
        const data = await response.json();
        console.log(data);
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    }

    fetchForecastData();
  }, [selectedTemperatureUnit, selectedRainUnit]);

  return (
    <div className="App">
      <h1>Bem vindo!</h1>
      <LocationAutocomplete onLocationSelect={(selectedLocation) => console.log('Selected Location:', selectedLocation)} />
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
      ): (
        <LocationAutocomplete onLocationSelect={handleLocationSelect} />
      )}
    </div>
  );
}

export default App;