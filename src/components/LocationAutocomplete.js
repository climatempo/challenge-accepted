import React, { useState } from 'react';

function LocationAutocomplete({ onLocationSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const availableLocations = [
    'Osasco, SP, Brasil',
    'São Paulo, SP, Brasil',
  ];

  const handleInputChange = async(event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    try {
      const response = await fetch(`https://climatempo-talent.rj.r.appspot.com/autocomplete_city?user_input=${newSearchTerm}`);
      const data = await response.json();
      console.log(data);
      const city_id = data.results[0].id;
      console.log(city_id);
    } catch (error) {
      console.error('Error fetching city:', error);
    }

    // Filtrar as sugestões com base no novo termo de pesquisa
    const filteredSuggestions = availableLocations.filter((location) =>
      location.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="container">
      <input className="form-control me-2" type="text" placeholder="Digite sua cidade"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="button">Pesquisar</button>
      <ul className="list-group">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => onLocationSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationAutocomplete;

