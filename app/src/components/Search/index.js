import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import api from "../../services/api";
import { useSelectCity } from "../../store/CitySelect";

import { Container } from "./styles";

function Search() {
  const [citys, setCitys] = useState([]);
  const { citySelect, setCitySelect } = useSelectCity([]);

  useEffect(() => {
    const loadCitys = () => {
      api
        .get(`locales/all`)
        .then((response) => setCitys(response.data))
        .catch((e) => {
          console.log(e);
        });
      // .finally(() => setLoading(false));
    };
    loadCitys();
  }, []);

  let options = [];
  citys.forEach((item) => {
    options.push({ value: item.name });
  });

  function searchCity(e) {
    setCitySelect(e);
  }
  console.log(citySelect);

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
