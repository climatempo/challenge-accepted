import React from "react";
import umbrella from "../../assets/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png";
import raindrop from "../../assets/icons/raindrop-close-up.png";
import arrowUp from "../../assets/icons/upload.png";
import arrowDown from "../../assets/icons/download.png";
import { IWeather } from "./interfaces";
import * as S from "./styles";

const Card: React.FC<IWeather> = ({ date, text, rain, temperature }) => {
  const localeDate = new Date(date).toLocaleDateString("pt-br");
  return (
    <S.Container>
      <S.TextContainer>
        <S.Date>{localeDate}</S.Date>
        <S.ForecastPhrase>{text}</S.ForecastPhrase>
      </S.TextContainer>
      <S.ForecastContainer>
        <S.ForecastItem>
          <S.Item>
            <S.Icon src={arrowUp} alt="Temperatura Máxima" />
            <S.ItemText color="max">{temperature.max}ºC</S.ItemText>
          </S.Item>
          <S.Item>
            <S.Icon src={arrowDown} alt="Temperatura Mínima" />
            <S.ItemText color="min">{temperature.min}ºC</S.ItemText>
          </S.Item>
        </S.ForecastItem>
        <S.ForecastItem>
          <S.Item>
            <S.Icon src={raindrop} alt="Milímetros de Chuva" />
            <S.ItemText color="default">{rain.probability}mm</S.ItemText>
          </S.Item>
          <S.Item>
            <S.Icon src={umbrella} alt="Probabilidade de Chuva" />
            <S.ItemText color="default">{rain.precipitation}%</S.ItemText>
          </S.Item>
        </S.ForecastItem>
      </S.ForecastContainer>
    </S.Container>
  );
};

export default Card;
