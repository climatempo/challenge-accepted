import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    // Quebra o retorno JSON em partes para utilizar os dados
    const weatherJSON = this.props.weather;
    var weatherData = []

    if(weatherJSON) {
      var localeName = weatherJSON.locale.name
      var localeState = weatherJSON.locale.state
      weatherData = weatherJSON.weather
    }
    return (
      <div className="tc h-100" style={{backgroundColor: "#f0f0f0"}}>
        <h2>Previsão para {localeName} - {localeState}</h2>
        {
          weatherData.map(weather => {
            return <Card key={weather.date} name={localeName} state={localeState} date={weather.date} text={weather.text} temperature={weather.temperature} rain={weather.rain} />
          })
        }
      </div>
    );
  }
}

export default CardList;
