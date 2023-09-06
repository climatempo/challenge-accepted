import React, { useState } from 'react';

function LocationAutocomplete({ onLocationSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  const handleInputChange = async(event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    try {
      const response = await fetch(`https://climatempo-talent.rj.r.appspot.com/autocomplete_city?user_input=${newSearchTerm}`);
      const data = await response.json();
      console.log(data);
      const city_id = data.results[0].id;
      console.log(city_id);

      const filteredSuggestions = data.results.map((result) => ({
        id: result.id,
        name: result.name,
      }));
      setSuggestions(filteredSuggestions);
      setIsSuggestionsOpen(newSearchTerm.trim() !== "");

    } catch (error) {
      console.error('Error fetching city:', error);
    }
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    onLocationSelect(city); // Chamamos a função onLocationSelect com a cidade selecionada
    setIsSuggestionsOpen(false);
  };

  return (
    <div className="container-fluid">
      <div className="row mb-4">
      <input className="form-control me-2" type="text" placeholder="Digite sua cidade"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div class="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-primary mb-3" type="button" onClick={() =>{
        if (suggestions.length === 1){
          handleCitySelect(suggestions[0]);
        }
      }}>Pesquisar</button>
    </div>
    </div>
    {isSuggestionsOpen && suggestions.length > 0 && (
    <ul className="list-group">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.id}
            className="list-group-item"
            onClick={() => handleCitySelect(suggestion)}
          >
            {suggestion.name}
          </li>
        ))}
      </ul>
    )}
    </div>
  );
}

export default LocationAutocomplete;

