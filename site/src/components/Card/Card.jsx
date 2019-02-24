import React from "react";
import classes from "./Card.sass";
import { CardTitle } from "./CardTitle/CardTitle";
import { WeatherInfo } from "./WeatherInfo/WeatherInfo";

import downloadImg from "../../images/download.png";
import uploadImg from "../../images/upload.png";
import umbrellaImg from "../../images/umbrella.png";
import dropImg from "../../images/drop.png";

export const Card = props => {
  const minTemperature = <span>{props.forecast.temperature.min}°C</span>;
  const maxTemperature = <span>{props.forecast.temperature.max}°C</span>;
  const rainPrecipitation = <span>{props.forecast.rain.precipitation}mm</span>;
  const rainProbability = <span>{props.forecast.rain.probability}%</span>;

  return (
    <div className={classes.Card}>
      <CardTitle date={props.forecast.date} description={props.forecast.text} />

      <div className={classes.WeatherInfoCard}>
        <WeatherInfo image={uploadImg} weatherData={maxTemperature} max/>
        <WeatherInfo image={downloadImg} weatherData={minTemperature} min/>
        <WeatherInfo image={dropImg} weatherData={rainPrecipitation} />
        <WeatherInfo image={umbrellaImg} weatherData={rainProbability}/>
      </div>
    </div>
  );
};
