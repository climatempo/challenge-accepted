import React from "react";

// Exemplo de como um objeto seria sem o uso de Component
const SearchBox = ({ onSearchEnter }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Digite o nome da cidade"
        onKeyPress={onSearchEnter}
      />
    </div>
  );
};

export default SearchBox;
