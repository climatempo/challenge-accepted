import React, { useState, useEffect, useCallback } from 'react';

import api from '../../service/api';

import Header from '../../components/header';
import WeatherList from '../../components/weatherList';

import { Container, Content } from './styles';

interface WeatherData {
  date: string;
  text: string;
  icon: string;
  rain: {
    precipitation: number;
    probability: number;
  };
  temperature: {
    min: number;
    max: number;
  }
}

interface LocaleData {
  name: string;
  state: string;
}

const Dashboard: React.FC = () => {
  const [locale, setLocale] = useState<LocaleData>({
    name: '',
    state: '',
  });
  const [weather, setWeather] = useState<WeatherData[]>([
    {
      date: '',
      text: '',
      icon: 'sun',
      rain: {
        precipitation: 0,
        probability: 0,
      },
      temperature: {
        min: 0,
        max: 0,
      }
    }]
  );
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    api.get('/weather?city=São Paulo').then(response => {
      const { weather, locale } = response.data;

      setLocale(locale);
      setWeather(weather);
    })

  }, [setWeather]);

  const handleSearch = useCallback(async (data) => {
    await api.get(`/weather?city=${data}`).then(response => {
      const { weather, locale } = response.data;

      setLocale(locale);
      setWeather(weather);
      setErrorMessage('');
    }).catch(() => {
      setLocale({} as LocaleData);
      setWeather([] as WeatherData[]);
      setErrorMessage('Nenhuma previsão para essa localização!');
    });
  }, [setLocale, setWeather, setErrorMessage]);

  return (
    <Container>
      <Header handleSearch={handleSearch} />
      <Content>
        <div className="header">
          {
            !errorMessage
            ? <h4>Previsões da semana <br />em {locale.name} - {locale.state}</h4>
            : <h4>{errorMessage}</h4>
          }
        </div>
        { !!weather.length && <WeatherList weather={weather} /> }
      </Content>
    </Container>
  );
};

export default Dashboard;
