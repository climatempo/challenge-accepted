/* eslint-disable react/prop-types */
import React from 'react';
import path from 'path';
import moment from 'moment';

import './Card.scss';

export default function Card({ day, text, min, max, prob, prec }) {
  return (
    <div className="weather-card">
      <div className="weather-card__text">
        <h3>{moment(day).format('DD/MM/YYYY')}</h3>
        <p>{text}</p>
      </div>
      <div className="weather-card__icons">
        <div className="weather-card__icons-temperature">
          <div>
            <img
              src={path.join(__dirname, './images/icons/upload.png')}
              alt="Máxima"
            />
            <span className="t-max">{`${max}ºC`}</span>
          </div>
          <div>
            <img
              src={path.join(__dirname, './images/icons/download.png')}
              alt="Mínima"
            />
            <span className="t-min">{`${min}ºC`}</span>
          </div>
        </div>
        <div className="weather-card__icons-probability">
          <div>
            <img
              src={path.join(__dirname, './images/icons/raindrop-close-up.png')}
              alt="Quantidade de Chuva"
            />
            <span>{`${prec}mm`}</span>
          </div>
          <div>
            <img
              src={path.join(
                __dirname,
                './images/icons/probabilidade-chuva.png'
              )}
              alt="Probabilidade de Chuva"
            />
            <span>{`${prob}%`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
