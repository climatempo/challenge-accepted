import React from "react";
import classes from "./WeatherCards.sass";
import { Card } from "../Card/Card";

const WeatherCards = props => {
  const cards = props.weatherForecast.map(forecast => (
    <div key={forecast.date}>
      <Card forecast={forecast}/>
    </div>
  ));

  return <div className={classes.WeatherCards}>{cards}</div>;
};

export default WeatherCards;
