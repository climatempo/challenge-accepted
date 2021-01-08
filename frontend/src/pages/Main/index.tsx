import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { Header, Card } from "../../components";

import { LocaleApiData, WeatherApiData } from "../../services/data";
import { ILocale } from "../../interface/locales";
import { IWeather } from "../../interface/weather";

import * as S from "./styles";
import { AxiosResponse } from "axios";
const defaultTitle = "Pesquise a previsão das cidades";

const Main: React.FC = () => {
  const [title, setTitle] = useState(defaultTitle);
  const [locales, setLocales] = useState<ILocale[]>([]);
  const [showWeather, setShowWeather] = useState(false);
  const [weather, setWeather] = useState<IWeather>({} as IWeather);

  useEffect(() => {
    LocaleApiData.index().then((response: AxiosResponse<ILocale[]>) => {
      setLocales(response.data);
    });
  }, []);

  const handleSearch = useCallback(
    async (event: ChangeEvent<HTMLSelectElement>) => {
      const localeId = Number(event.currentTarget.value);
      if (localeId === 0) {
        setShowWeather(false);
        setTitle(defaultTitle);
        return;
      } else {
        WeatherApiData.show(localeId)
          .then((response: AxiosResponse<IWeather>) => {
            const { name, state } = response.data.locale;
            setWeather(response.data);
            setTitle(`Previsão para ${name} - ${state}`);
            setShowWeather(true);
          })
          .catch(() => setShowWeather(false));
      }
    },
    []
  );

  return (
    <>
      <Header />
      {!showWeather && <S.Title>{title}</S.Title>}
      <S.SearchInput onChange={(value) => handleSearch(value)}>
        <option value={0}>Selecione a cidade</option>
        {locales.length > 0 &&
          locales.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </S.SearchInput>
      <S.Container>
        {showWeather && (
          <>
            <S.Title>{title}</S.Title>
            {weather.weather.map(({ date, text, rain, temperature }, index) => (
              <Card
                key={index}
                date={date}
                text={text}
                rain={rain}
                temperature={temperature}
              />
            ))}
          </>
        )}
      </S.Container>
    </>
  );
};

export default Main;
