import React, { useMemo } from 'react';
import { GiWaterDrop } from 'react-icons/gi';
import { IoMdUmbrella } from 'react-icons/io';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

import IWeather from '../../interfaces/IWeather';

import { Container, Card, TextRed, TextBlue } from './styles';

export default function WeatherCard({ weather }: { weather: IWeather }) {
  const date = useMemo(() => {
    const formatedDate = new Date(`${weather.date} GMT-0300`);
    return formatedDate.toLocaleDateString('pt-BR');
  }, [weather]);

  return (
    <Container>
      <Card key={weather.date}>
        <header>
          <time>{date}</time>
          <p>{weather.text}</p>
        </header>

        <div>
          <div>
            <p>
              <BsArrowUp size={28} />{' '}
              <TextBlue>{weather.temperature.max}</TextBlue>
            </p>
            <p>
              <BsArrowDown size={28} />{' '}
              <TextRed>{weather.temperature.min}</TextRed>
            </p>
          </div>

          <div>
            <p>
              <GiWaterDrop size={28} /> {weather.rain.precipitation}mm
            </p>
            <p>
              <IoMdUmbrella size={28} /> {weather.rain.probability}%
            </p>
          </div>
        </div>
      </Card>
    </Container>
  );
}
