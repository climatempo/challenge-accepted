import React , {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown, faTint, faUmbrella} from "@fortawesome/free-solid-svg-icons";

export default class CardWeather extends Component{
    render(){
        return(
            <div>
                <h3>Previsão para {this.props.weather.locale.name} - {this.props.weather.locale.state}</h3>
                {this.props.weather.weather.map((day_weather, index) =>{return(
                    <div className="Card" key={index}>
                        <div className="Card-Header">
                                <label>{day_weather.date}</label>
                                <p>{day_weather.text}</p>
                        </div>

                        <div className="Card-Icons">
                            <div className="Card-Content">
                                <i><FontAwesomeIcon icon={faArrowUp} /></i>
                                <label className="temp-max">{day_weather.temperature.max}°</label>
                            </div>

                            <div className="Card-Content">
                                <i><FontAwesomeIcon icon={faArrowDown} /></i>
                                <label className="temp-min">{day_weather.temperature.min}°</label>
                            </div>

                            <div className="Card-Content">
                                <i><FontAwesomeIcon icon={faTint} /> </i>
                                <label>{day_weather.rain.precipitation}mm</label>
                            </div>

                            <div className="Card-Content">
                                <i><FontAwesomeIcon icon={faUmbrella}/> </i>
                                <label>{day_weather.rain.probability}%</label>
                            </div>    
                        </div>
                    </div>
                )})}
            </div>
        )
    }
}