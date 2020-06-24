import React from "react";
import { AutoComplete } from "antd";

import { Container } from "./styles";

const options = [
  {
    value: "Burns Bay Road",
  },
  {
    value: "Downing Street",
  },
  {
    value: "Wall Street",
  },
];

function searchCity(e) {
  alert(e);
}

function Search() {
  return (
    <Container>
      <AutoComplete
        style={{
          width: "80%",
        }}
        options={options}
        onSelect={searchCity}
        placeholder="busque uma cidade..."
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </Container>
  );
}

export default Search;
