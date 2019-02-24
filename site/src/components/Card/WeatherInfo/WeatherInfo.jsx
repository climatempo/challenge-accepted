import React from "react";
import classes from "./WeatherInfo.sass";

export const WeatherInfo = props => {
  let color = "";

  if (props.max) color = classes.Blue;
  if (props.min) color = classes.Red;

  return (
    <div className={[classes.WeatherInfo, color].join(" ")}>
      <span className={classes.WeatherInfoVerticalAlign}></span><img src={props.image} alt="" />
      {props.weatherData}
    </div>
  );
};
