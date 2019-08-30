import React from "react";
import classes from "./style.sass";
import Card from "../Card";

const WeatherCards = props => {
  const cards = props.weatherForecast.map(forecast => (
    <div key={forecast.date}>
      <Card forecast={forecast}/>
    </div>
  ));
  return <div className={classes.WeatherCards}>{cards}</div>;
};

export default WeatherCards;
