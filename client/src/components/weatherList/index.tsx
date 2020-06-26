import React from 'react';

import WeatherLDetail from '../weatherLDetail';

import { Container, List, DayInfo } from './styles';

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

interface ComponentProps {
  weather: WeatherData[];
}

const WeatherList: React.FC<ComponentProps> = ({ weather }) => {
  return (
    <Container>
      <List>
        {
          weather.map(item =>
            <DayInfo key={item.date}>
              <WeatherLDetail weather={item} />
            </DayInfo>
          )
        }
      </List>
    </Container>
  );
};

export default WeatherList;
