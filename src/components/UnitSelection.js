import React from 'react';

function UnitSelection({ selectedTemperatureUnit, selectedRainUnit, onUnitChange }) {
  const handleUnitChange = (event) => {
    onUnitChange(event.target.name, event.target.value);
  };

  return (
    <div>
      <label>
        Unidade de Temperatura:
        <select name="temperature" value={selectedTemperatureUnit} onChange={handleUnitChange}>
          <option value="celsius">°C</option>
          <option value="fahrenheit">°F</option>
        </select>
      </label>
      
      <label>
        Unidade de Chuva:
        <select name="rain" value={selectedRainUnit} onChange={handleUnitChange}>
          <option value="mm">mm</option>
          <option value="inch">inch</option>
        </select>
      </label>
    </div>
  );
}

export default UnitSelection;

