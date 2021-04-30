import React from 'react';

import arrowUp from '../../assets/upload.png';
import arrowDown from '../../assets/download.png';
import umbrella from '../../assets/umbrella.png';
import raindrop from '../../assets/raindrop-close-up.png';
import styles from './weatherCard.module.css';

export default function WeatherCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>01/02/2017</span>
        <p>
          Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a
          qualquer hora.
        </p>
      </div>

      <div className={styles.content}>
        <div>
          <img src={arrowUp} alt="arrow up" />
          <span>20°C</span>
        </div>
        <div>
          <img src={arrowDown} alt="arrow down" />
          <span>10°C</span>
        </div>
        <div>
          <img src={raindrop} alt="rain drop" />
          <span>10mm</span>
        </div>
        <div>
          <img src={umbrella} alt="umbrella" />
          <span>50%</span>
        </div>
      </div>
    </div>
  );
}
