import React from "react";
import searchIcon from "../images/icons/search.png";

// Exemplo de como um objeto seria sem o uso de Component
const SearchBox = ({ onSearchEnter }) => {
  return (
    <div className="dif flex-row p2 tc content-center">
      <input
        className="pa3 ba bw0 w-80"
        type="search"
        placeholder="Digite o nome da cidade"
        onKeyPress={onSearchEnter}
      />
      <span className="dib h-100 v-mid"></span><img className="v-mid pa1" src={searchIcon} alt="Search" style={{width: "30px"}} />
    </div>
  );
};

export default SearchBox;
