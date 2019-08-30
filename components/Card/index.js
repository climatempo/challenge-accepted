import React from "react";
import classes from "./style.sass";
import formatdate from "../../utils/formatdate";
import CardTitle from "./CardTitle";
import WeatherInfo from "./WeatherInfo";

import downloadImg from "../../images/icons/download.png";
import uploadImg from "../../images/icons/upload.png";
import umbrellaImg from "../../images/icons/raindrop-close-up.png";
import dropImg from "../../images/icons/raindrop-close-up.png";

export default props => {
  const minTemperature = <span>{props.forecast.temperature.min}°C</span>;
  const maxTemperature = <span>{props.forecast.temperature.max}°C</span>;
  const rainPrecipitation = <span>{props.forecast.rain.precipitation}mm</span>;
  const rainProbability = <span>{props.forecast.rain.probability}%</span>;

  return (
    <div className={classes.Card}>
      <CardTitle date={formatdate(props.forecast.date)} description={props.forecast.text} />
      <div className={classes.WeatherInfoCard}>
        <WeatherInfo image={uploadImg} weatherData={maxTemperature} max/>
        <WeatherInfo image={downloadImg} weatherData={minTemperature} min/>
        <WeatherInfo image={dropImg} weatherData={rainPrecipitation} />
        <WeatherInfo image={umbrellaImg} weatherData={rainProbability}/>
      </div>
    </div>
  );
};
