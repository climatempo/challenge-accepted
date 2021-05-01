import React from 'react';

import arrowUp from '../../assets/upload.png';
import arrowDown from '../../assets/download.png';
import umbrella from '../../assets/umbrella.png';
import raindrop from '../../assets/raindrop-close-up.png';
import styles from './weatherCard.module.css';

export default function WeatherCard(props) {
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
          <span>{`${props.weather.temperature.max}°C`}</span>
        </div>
        <div>
          <img src={arrowDown} alt="arrow down" />
          <span>{`${props.weather.temperature.min}°C`}</span>
        </div>
        <div>
          <img src={raindrop} alt="rain drop" />
          <span>{`${props.weather.rain.precipitation}mm`}</span>
        </div>
        <div>
          <img src={umbrella} alt="umbrella" />
          <span>{`${props.weather.rain.probability}%`}</span>
        </div>
      </div>
    </div>
  );
}
