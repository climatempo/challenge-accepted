import React from 'react'
import { Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return (
        <Row>
            {weathers.map((weather) => {
                return <Row key={weather.date}>
                    <WeatherCard temp_max={weather.temperature.max} temp_min={weather.temperature.min} dt={weather.date} text={weather.text} rain_qt={weather.rain.precipitation} rain_prob={weather.rain.probability}/>
                </Row>;
            }
        )} 
        </Row>
    )
}

export default WeatherList;