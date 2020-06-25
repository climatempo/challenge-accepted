import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';

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

  useEffect(() => {
    api.get('/weather?city=Osasco').then(response => {
      const { weather, locale } = response.data;

      setLocale(locale);
      setWeather(weather);
    })

  }, [setWeather]);

  const handleSearch = useCallback(() => {

  }, []);

  console.log('weather', weather);

  return (
    <Container>
      <Header />
      <Content>
        <div className="header">
          <h4>Previsões da semana <br />em {locale.name} - {locale.state}</h4>
        </div>
        <WeatherList weather={weather} />
      </Content>
    </Container>
  );
};

export default Dashboard;
