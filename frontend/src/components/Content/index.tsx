import React, { useContext } from "react";
import Cards from "../Cards";
import { ContentWrapper, ResponseDisplay } from "./style";
import { GlobalContext, TContextProps } from "../../context/GlobalContext";
import Converter from "../ConverterButton";

const Content = () => {
  const { searching, result, notFound } = useContext(
    GlobalContext
  ) as TContextProps;

  searching && (
    <ContentWrapper>
      <ResponseDisplay>Buscando previsão...</ResponseDisplay>
    </ContentWrapper>
  );

  return (
    <ContentWrapper>
      {notFound ? (
        <ResponseDisplay>Nenhum resultado encontrado.</ResponseDisplay>
      ) : result.weather ? (
        <>
          <ResponseDisplay>
            Previsão para {result.locale.name} - {result.locale.state}
          </ResponseDisplay>
          <Converter />
          {result.weather.map((item) => (
            <Cards key={item.date} data={item} />
          ))}
        </>
      ) : (
        <ResponseDisplay>Bem vindo ao ClimaTempo</ResponseDisplay>
      )}
    </ContentWrapper>
  );
};

export default Content;
