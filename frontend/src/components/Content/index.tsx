import React, { useContext } from "react";
import Cards from "../Cards";
import { ContentWrapper, ResponseDisplay } from "./style";
import { GlobalContext, TContextProps } from "../../context/GlobalContext";

const Content = () => {
  const { result } = useContext(GlobalContext) as TContextProps;

  return (
    <ContentWrapper>
      {result.weather ? (
        <ResponseDisplay>
          Previsão para {result.locale.name} - {result.locale.state}
        </ResponseDisplay>
      ) : (
        <ResponseDisplay>Bem vindo ao ClimaTempo</ResponseDisplay>
      )}
      {result.weather &&
        result.weather.map((item) => <Cards key={item.date} data={item} />)}
    </ContentWrapper>
  );
};

export default Content;
