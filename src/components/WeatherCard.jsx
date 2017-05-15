import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class WeatherCard extends Component {
  render() {
    const { date, text, temperature, rain } = this.props.weather
    return (
      <Col xs={12} sm={6} md={4}>
        <div className="weather-card">
        	<div className="card-header">
  	      	<h6>{date}</h6>
  	      	<p><small>{text}</small></p>
        	</div>
        	<div className="subcard">
        		<div>
        			<div>
  	      			<img src="imgs/icons/upload.png"/>
  	      			<span className="color-blue">{temperature.max} ºC</span>
        			</div>
        			<div>
  	      			<img src="imgs/icons/download.png"/>
  	      			<span className="color-red">{temperature.min} ºC</span>
        			</div>
        		</div>
        		<div>
        			<div>
  	      			<img src="imgs/icons/raindrop-close-up.png"/>
  	      			<span>{rain.precipitation}mm</span>
        			</div>
        			<div>
  	      			<img src="imgs/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png"/>
  	      			<span>{rain.probability}%</span>
        			</div>
        		</div>
        	</div>
        </div>
      </Col>
    );
  }
}