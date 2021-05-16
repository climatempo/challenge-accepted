/* eslint-disable react/prop-types */
import './Results.scss';
import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Card from '../Card';
import Notification from '../Notification';

const GET_WEATHER = gql`
  query getWeather($localeID: Int!) {
    weather(localeID: $localeID) {
      weather {
        date
        text
        temperature {
          min
          max
        }
        rain {
          probability
          precipitation
        }
      }
    }
  }
`;

export default function Results({ currentCity }) {
  const [weather, setWeather] = React.useState();

  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: { localeID: currentCity.id },
    onCompleted: () => {
      setWeather(data.weather);
    },
  });
  if (loading) {
    return <h1>Carregando...</h1>;
  }
  if (error) {
    return Notification(
      'error',
      'Ops! Algo Aconteceu!',
      'Houve um problema em nosso sistema, tente novamente em alguns istantes!'
    );
  }

  return currentCity ? (
    <div className="weather-content__results">
      <h1>
        Previsão do tempo para {currentCity.name} - {currentCity.state}
      </h1>
      {weather ? (
        <>
          <div className="wheater-content__results_box_cards">
            {weather.weather.map((w) => (
              <Card
                day={w.date}
                text={w.text}
                min={w.temperature.min}
                max={w.temperature.max}
                prob={w.rain.probability}
                prec={w.rain.precipitation}
                key={w.date}
              />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  ) : (
    ''
  );
}
