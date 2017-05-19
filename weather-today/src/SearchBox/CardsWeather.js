import React, { Component } from 'react';

export default class CardsWeather extends Component {

  render() {

    if(this.props.informations.length === 0) {
      return (
        <div>
          <p>Que tal, ver como será a previsão do Tempo em Osasco ou São Paulo? :)</p>
        </div>
      );
    } else if(this.props.informations.length <= 1) {
      return (
        <div>
          <p>Hmm... Ou você deixou em branco o espaço, ou esse nome não existe. <br /> Você verificou a acentuação?</p>
        </div>
      );
    }

    return(
      <div>
        <h2>{this.props.locale} - SP</h2>
        {
          this.props.informations.map ( (info, index) =>
            (
              <div key={index} className="secao">
                <div className="card">
                  <div className="card-date">
                    <span>{info.date}</span>
                  </div>
                  <div className="card-text">
                    <p>{info.text}</p>
                  </div>
                  <div className="container">
                    <div className="card-temperature">
                      <img src={require('../../images/icons/upload.png')} role="presentation" />
                        <h3 className="max">{info.temperature.max}&deg;C</h3>
                      <img src={require('../../images/icons/download.png')} role="presentation" />
                        <h3 className="min">{info.temperature.min}&deg;C</h3>
                    </div>
                    <div className="card-rain">
                      <img src={require('../../images/icons/raindrop.png')} role="presentation" />
                        <h3>{info.rain.precipitation}mm</h3>
                      <img src={require('../../images/icons/umbrella.png')} role="presentation" />
                        <h3>{info.rain.probability}%</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        }

      </div>
    );
  }
}
