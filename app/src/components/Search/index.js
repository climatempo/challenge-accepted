import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import api from "../../services/api";
import { useSelectCity } from "../../store/CitySelect";
import { Container } from "./styles";

function Search() {
  const [citys, setCitys] = useState([]);
  const { setCitySelect } = useSelectCity("");

  useEffect(() => {
    const loadCitys = () => {
      api
        .get(`locales/all`)
        .then((response) => setCitys(response.data))
        .catch((e) => {
          console.log(e);
        });
    };
    loadCitys();
  }, []);

  let options = [];
  citys.forEach((city) => {
    options.push({ value: city.name });
  });

  function searchCity(e) {
    setCitySelect(e);
  }

  return (
    <Container>
      <AutoComplete
        style={{
          width: "100%",
        }}
        options={options}
        onSelect={searchCity}
        placeholder="Busque uma cidade..."
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </Container>
  );
}

export default Search;
