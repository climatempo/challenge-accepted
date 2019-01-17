import React, { Component } from "react";
import maxTemperature from "../images/icons/upload.png";
import minTemperature from "../images/icons/download.png";
import drop from '../images/icons/raindrop-close-up.png'
import umbrella from '../images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png'
import moment from 'moment';

class Card extends Component {
  render() {
    return (
      <div
        className="dib pa3 ma3 grow bw2 shadow-5"
        // Define o gradiente e a largura máxima do Card
        style={{
          background: "linear-gradient(to top, #dddddd 30%, #f6f6f6 70%)",
          maxWidth: "350px"
        }}
      > 
        <div className="tl flex flex-column">{/* Data */}
          <h3 className="fl">{moment(this.props.date, "YYYY-MM-DD").format("DD/MM/YYYY")}</h3>
          <h4>{this.props.text}</h4>
        </div>
        <div className="flex w-100 justify-around items-center">
          {/* Temperatura máxima */}
          <img
            style={{ width: "32px", height: "32px" }}
            src={maxTemperature}
            alt="Max Temperature"
          />
          <h1 className="red fw4 dif" style={{ width: "fit-content" }}>
            {this.props.temperature.max}&deg;C
          </h1>
          {/* Temperatura mínima */}
          <img
            style={{ width: "32px", height: "32px" }}
            src={minTemperature}
            alt="Min Temperature"
          />
          <h1 className="blue fw4 dif">{this.props.temperature.max}&deg;C</h1>
        </div>
        <div className="flex w-100 justify-around items-center">
          {/* Precipitação */}
          <img
            style={{ width: "32px", height: "32px" }}
            src={drop}
            alt="Precipitation"
          />
          <h1 className="fw4 dif" style={{ width: "fit-content" }}>
            {this.props.rain.precipitation}mm
          </h1>
          {/* Probabilidade */}
          <img
            style={{ width: "32px", height: "32px" }}
            src={umbrella}
            alt="Probability"
          />
          <h1 className="fw4 dif">{this.props.rain.probability}&#37;</h1>
        </div>
      </div>
    );
  }
}

export default Card;
