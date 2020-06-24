import React from "react";
import Search from "../Search";
import CardInfo from "../CardInfo";
import preview from "../../assets/preview.gif";
import { useSelectCity } from "../../store/CitySelect";
import { Content } from "./styles";

function Main() {
  const { citySelect } = useSelectCity("");

  return (
    <Content>
      <Search />
      {citySelect.length === 0 ? (
        <img src={preview} alt="Preview dos cards" />
      ) : (
        <>
          <h2>Previsão para: {citySelect}</h2>
          <CardInfo />
        </>
      )}
    </Content>
  );
}

export default Main;
