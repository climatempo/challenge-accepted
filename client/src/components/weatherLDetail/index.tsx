import React from 'react';
import moment from 'moment';
import { Container, Info } from './styles';

interface ComponentProps {
  weather: {
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
}

const WeatherLDetail: React.FC<ComponentProps> = ({ weather }) => {

  const dateFormated = (date: string): string => {
    const dayFormated = moment(date).locale('pt-br').format('dddd');

    return moment(date).isSame(moment(), 'day') ? 'Hoje' : dayFormated;
  }

  return (
    <Container>
      <h3>{dateFormated(weather.date)}</h3>
      <div className="temperature">
        <img src={require(`../../images/${weather.icon}.png`)} alt="icon" />
        <div className="temperature__info">
          <span className="temperature__info__max">{weather.temperature.max}</span>
          <span className="temperature__info__min">/ {weather.temperature.min}</span>
          <span className="temperature__info__celsius">°C</span>
        </div>
      </div>
      <div className="others">
        <p>
          {weather.text}
        </p>
        <div className="others__probability">
          <Info bgColor="#F5EAEE">
            <div>
              <img
                src="https://img.icons8.com/carbon-copy/100/D784A0/keep-dry.png"
                alt=""
              />
            </div>
            <span>{weather.rain.precipitation}mm</span>
          </Info>
          <Info bgColor="#D2EEFC">
            <div>
              <img
                src="https://img.icons8.com/ultraviolet/100/000000/wet.png"
                alt=""
              />
            </div>
            <span>{weather.rain.probability}%</span>
          </Info>
        </div>
      </div>
    </Container>
  );
};

export default WeatherLDetail;
