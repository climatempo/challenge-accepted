import React, { Component } from "react";
import maxTemperature from "../images/icons/upload.png";
import minTemperature from "../images/icons/download.png";

class Card extends Component {
  render() {
    return (
      <div
        className="dib pa3 ma3 grow bw2 shadow-5"
        style={{
          background: "linear-gradient(to top, #dddddd 30%, #f6f6f6 70%)",
        }}
      >
        <div className="tl flex flex-column">
          <h3 className="fl">{this.props.date}</h3>
          <h4>{this.props.text}</h4>
        </div>
        <div className="tc">
          <div className="dib w-100">
            <h1 className="red fw4">
              <span>
                <img
                  style={{width: "32px"}}
                  src={maxTemperature}
                  alt="Max Temperature"
                />
              </span>
              <span>{this.props.temperature.max}&deg;C</span>
            </h1>
            <h1 className="blue fw4">
              <span>
                <img
                  style={{width: "32px"}}
                  src={minTemperature}
                  alt="Min Temperature"
                />
              </span>
              <span>{this.props.temperature.max}&deg;C</span>
            </h1>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <h1>Climatempo</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
