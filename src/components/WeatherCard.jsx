import React, { Component } from 'react';

export default class WeatherCard extends Component {
  render() {
    return (
      <div className="weather-card">
      	<div className="card-header">
	      	<h6>01/01/2001</h6>
	      	<p><small>Desc</small></p>
      	</div>
      	<div className="subcard">
      		<div>
      			<div>
	      			<img src="imgs/icons/upload.png"/>
	      			<span className="color-blue">20 ºC</span>
      			</div>
      			<div>
	      			<img src="imgs/icons/download.png"/>
	      			<span className="color-red">10 ºC</span>
      			</div>
      		</div>
      		<div>
      			<div>
	      			<img src="imgs/icons/raindrop-close-up.png"/>
	      			<span>10mm</span>
      			</div>
      			<div>
	      			<img src="imgs/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png"/>
	      			<span>50%</span>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}