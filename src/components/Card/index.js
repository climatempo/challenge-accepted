/* eslint-disable react/prop-types */
import React from 'react';
import path from 'path';
import moment from 'moment';

import { Switch } from 'antd';

import './Card.scss';

export default function Card({ day, text, min, max, prob, prec }) {
  const [isFahrenheit, setIsFahrenheit] = React.useState(false);
  const [isInch, setIsInch] = React.useState(false);

  return (
    <div className="weather-card">
      <div className="weather-card__text">
        <h3>{moment(day).format('DD/MM/YYYY')}</h3>
        <p>{text}</p>
        <div className="switchs-units">
          <Switch
            checkedChildren="°F"
            unCheckedChildren="°F"
            onChange={setIsFahrenheit}
          />
          <Switch
            checkedChildren="inch"
            unCheckedChildren="inch"
            onChange={setIsInch}
          />
        </div>
      </div>
      <div className="weather-card__icons">
        <div className="weather-card__icons-temperature">
          <div>
            <img
              src={path.join(__dirname, './images/icons/upload.png')}
              alt="Máxima"
            />
            <span className="t-max">
              {isFahrenheit ? `${(max * 1.8 + 32).toFixed(1)}°F` : `${max}ºC`}
            </span>
          </div>
          <div>
            <img
              src={path.join(__dirname, './images/icons/download.png')}
              alt="Mínima"
            />
            <span className="t-min">
              {isFahrenheit ? `${(min * 1.8 + 32).toFixed(1)}°F` : `${min}ºC`}
            </span>
          </div>
        </div>
        <div className="weather-card__icons-probability">
          <div>
            <img
              src={path.join(__dirname, './images/icons/raindrop-close-up.png')}
              alt="Quantidade de Chuva"
            />
            <span>
              {isInch ? `${(prec / 25.4).toFixed(2)}inch` : `${prec}mm`}
            </span>
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
