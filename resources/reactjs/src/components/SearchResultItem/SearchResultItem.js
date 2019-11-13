import React, {Component} from 'react';

// Images
import TemperatureMax from '../../assets/images/temperature-max.png';
import TemperatureMin from '../../assets/images/temperature-min.png';
import RainPrecipitation from '../../assets/images/rain-precipitation.png';
import RainProbability from '../../assets/images/rain-probability.png';

// The header component
class SearchResultItem extends Component {
  render(){
    let item = this.props.data;
    return (
     item &&  
    <li key={item.id} className='list-item'>
      <p className='card-date background-white'>
        {item.weather_date}
        <br/>
        <br/>
        {item.description}
      </p>
      <div className='card-values flex flex-align-start flex-justify-between flex-wrap'>
        <div className='card-data temperature-max flex flex-align-center flex-justify-between'>
          <img src={TemperatureMax} alt='Temperatura máxima' />
          <span className='color-red font-23 font-400'>
          {item.temperature_max}ºC
          </span>
        </div>
        <div className='card-data temperature-min flex flex-align-center flex-justify-between'>
          <img src={TemperatureMin} alt='Temperatura mínima' />
          <span className='color-primary font-23 font-400'>
            {item.temperature_min}ºC
          </span>
        </div>
        <div className='card-data rain-precipitation flex flex-align-center flex-justify-between'>
          <img src={RainPrecipitation} alt='Precipitação' />
          <span className='font-23 font-400'>
          {item.rain_precipitation}mm
          </span>
        </div>
        <div className='card-data rain-probability flex flex-align-center flex-justify-between'>
          <img src={RainProbability} alt='Probabilidade de chuva'  />
          <span className='font-23 font-400'>
            {item.rain_probability}%
          </span>
        </div>
      </div>
    </li>
    );
  }
}

export default SearchResultItem;
