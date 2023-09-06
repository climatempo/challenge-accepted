import React from 'react';

function UnitSelection({ selectedTemperatureUnit, selectedRainUnit, onUnitChange }) {
  return (
    <div className="d-flex justify-content-end mb-3">
      <button
        className={`btn btn-outline-secondary me-2 ${selectedTemperatureUnit === 'C' ? 'active' : ''}`}
        onClick={() => onUnitChange('temperature', 'C')}
      >
        °C
      </button>
      <button
        className={`btn btn-outline-secondary ${selectedTemperatureUnit === 'F' ? 'active' : ''}`}
        onClick={() => onUnitChange('temperature', 'F')}
      >
        °F
      </button>
      <button
        className={`btn btn-outline-secondary ms-3 ${selectedRainUnit === 'mm' ? 'active' : ''}`}
        onClick={() => onUnitChange('rain', 'mm')}
      >
        mm
      </button>
      <button
        className={`btn btn-outline-secondary ${selectedRainUnit === 'inch' ? 'active' : ''}`}
        onClick={() => onUnitChange('rain', 'inch')}
      >
        inch
      </button>
    </div>
  );
}

export default UnitSelection;
