import React from 'react';

import arrowUp from '../../assets/upload.png';
import arrowDown from '../../assets/download.png';
import umbrella from '../../assets/umbrella.png';
import raindrop from '../../assets/raindrop-close-up.png';
import styles from './weatherCard.module.css';

export default function WeatherCard(props) {
  function handleTransformCelsiusToFahrenheit(value) {
    return (value * 1.8 + 32).toFixed(2);
  }

  function handleTransformMMToInch(value) {
    return (value / 25.4).toFixed(2);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          {new Intl.DateTimeFormat('pt-BR').format(
            new Date(props.weather.date),
          )}
        </span>
        <p>{props.weather.text}</p>
      </div>

      <div className={styles.content}>
        <div>
          <img src={arrowUp} alt="arrow up" />
          {props.isCelsius ? (
            <span>{`${props.weather.temperature.max}°C`}</span>
          ) : (
            <span>{`${handleTransformCelsiusToFahrenheit(
              props.weather.temperature.max,
            )}°F`}</span>
          )}
        </div>
        <div>
          <img src={arrowDown} alt="arrow down" />
          {props.isCelsius ? (
            <span>{`${props.weather.temperature.min}°C`}</span>
          ) : (
            <span>{`${handleTransformCelsiusToFahrenheit(
              props.weather.temperature.min,
            )}°F`}</span>
          )}
        </div>
        <div>
          <img src={raindrop} alt="rain drop" />
          {props.isMM ? (
            <span>{`${props.weather.rain.precipitation}mm`}</span>
          ) : (
            <span>{`${handleTransformMMToInch(
              props.weather.rain.precipitation,
            )}inch`}</span>
          )}
        </div>
        <div>
          <img src={umbrella} alt="umbrella" />
          <span>{`${props.weather.rain.probability}%`}</span>
        </div>
      </div>
    </div>
  );
}
