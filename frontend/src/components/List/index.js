import React from 'react'
import { Weather } from './styles';
import { FaCloudRain, FaUmbrella, FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa';

export default function List({ data }) {      
    console.log(data);
    return(      
      <Weather>
        {data.map((d,index) => (
          <li key={index}>
            <span>{d.date}</span>
            <p>{d.text}</p>
            <div>           
              <FaTemperatureLow size={20}
              color="#4879E8"/>
              <span>{d.temperature.max} °C</span> 
              <FaTemperatureHigh  size={20}
              color="#FF3121"/>
              <span>{d.temperature.min} °C</span>
            </div>
            <div>
              <FaCloudRain  size={20}
              color="#48CDE8"/>
              <span>{d.rain.precipitation} mm </span>
              <FaUmbrella  size={20}/>
              <span>{d.rain.probability} %</span>
            </div>
            
          </li>
        ))}
      </Weather>
    )
}
