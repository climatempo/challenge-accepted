import React, { Component } from "react";
import WeatherCard from "../WeatherCard";

import "./index.css";

/** Componente para mostrar os dados dos climas */

export default class Weathers extends Component {
  render() {
    const { weathers } = this.props;

    return (
      <div className={"weathers-container"}>
        {weathers.length !== 0 ? (
          weathers
            .sort((a, b) => {
              if (a.date > b.date) {
                return 1;
              } else if (a.date < b.date) {
                return -1;
              } else {
                return 0;
              }
            })
            .map(weather => (
              <WeatherCard
                key={weather.date}
                className={"weathers-element"}
                weather={weather}
              />
            ))
        ) : (
          <></>
        )}
      </div>
    );
  }
}
