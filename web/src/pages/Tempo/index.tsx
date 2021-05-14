import React, { useCallback, useEffect, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

import ILocale from '../../interfaces/ILocale';
import IWeather from '../../interfaces/IWeather';

import WeatherCard from '../../components/WeatherCard';
import { Container, Header, Form, LocaleTitle } from './styles';

interface ILocaleWeather {
  period: {
    begin: string;
    end: string;
  };
  locale: ILocale;
  weather: IWeather[];
}

export default function Tempo() {
  const [localeWeather, setLocaleWeather] = useState<null | ILocaleWeather>(
    null,
  );
  const [locales, setLocales] = useState<[] | ILocale[]>([]);

  const search = useCallback(
    async event => {
      event.preventDefault();
      const localeData = locales.find(
        item => item.name === event.target.locale.value,
      );

      try {
        const res = await fetch(
          `http://localhost:3333/weather/locale/${localeData?.id}`,
        );
        const weatherResponse = await res.json();
        setLocaleWeather(weatherResponse);
      } catch (error) {
        setLocaleWeather(null);
        alert('Local não encontrado');
      }
    },
    [setLocaleWeather, locales],
  );

  useEffect(() => {
    const getLocales = async () => {
      try {
        const res = await fetch('http://localhost:3333/locales');
        const localesResponse = await res.json();
        setLocales(localesResponse);
      } catch (error) {
        setLocales([]);
      }
    };

    getLocales();
  }, []);

  return (
    <Container>
      <Header>
        <img alt="Logo" src="/logo-white.png" />
      </Header>

      <Form onSubmit={search}>
        <input name="locale" />
        <button type="submit">
          <IoMdSearch size={30} />
        </button>
      </Form>

      {localeWeather === null ? (
        <LocaleTitle>Busque um local</LocaleTitle>
      ) : (
        <>
          <LocaleTitle>
            Previsão para {localeWeather.locale.name} -{' '}
            {localeWeather.locale.state}
          </LocaleTitle>
          {localeWeather.weather.map(weather => (
            <WeatherCard key={weather.date} weather={weather} />
          ))}
        </>
      )}
    </Container>
  );
}
