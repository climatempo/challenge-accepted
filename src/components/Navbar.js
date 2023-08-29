import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import logoImage from './logo-white.png';
const suggestions = [
  'São Paulo',
  'Osasco',
  'Campinas',
  // Adicione mais sugestões aqui...
];

function Navbar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <a href="#" className="brand-logo center">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </a>
        <form className="d-flex">
          <Autocomplete
            inputProps={{ className: 'form-control me-2' }}
            getItemValue={(item) => item}
            items={suggestions}
            renderItem={(item, isHighlighted) => (
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>{item}</div>
            )}
            value={searchValue}
            onChange={handleSearchChange}
            onSelect={(value) => setSearchValue(value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
