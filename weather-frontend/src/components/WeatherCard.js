import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import { WiThermometer, WiThermometerExterior, WiRaindrop, WiUmbrella } from "react-icons/wi";

const WeatherCard = ({dt, text, temp_min, temp_max, rain_qt, rain_prob}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <Card>
      <Card.Body>
        <Card.Header><h2>{date.toLocaleDateString()}</h2></Card.Header>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {text}
        </p>
        <Row>
            <Col><WiThermometer size={28} color='red' />Máx: {temp_max}°C</Col>
            <Col><WiThermometerExterior size={28} color='blue' />Min: {temp_min}°C</Col>
        </Row>
        <Row>
            <Col><WiRaindrop size={28} />Quant.: {rain_qt}mm</Col>
            <Col><WiUmbrella size={28} />Prob.: {rain_prob}%</Col>
        </Row>
        
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;