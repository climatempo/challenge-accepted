import React, { Component } from 'react'
import { Col, Card, Row } from 'react-materialize'
import arrowUp from '../../../../assets/images/icons/upload.png'
import arrowDown from '../../../../assets/images/icons/download.png'
import drop from '../../../../assets/images/icons/raindrop-close-up.png'
import umbrella from '../../../../assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png'

import Constants from '../../../../constants'
import moment from 'moment'


class CardForecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { weather } = this.props;

    return (
      weather.map((day) => (
        <Card key={day.date} className='white' textClassName='black-text'>
          <Row className='container-title-forecast'>
            <Col s={12}>
              <div className='date-forecast'>{moment(day.date).format('DD/MM/YYYY')}</div>
              <div className='text-forecast'>{day.text}</div>
            </Col>
          </Row>
          <Row className='container-forecast'>
            <Row>
              <Col s={3}>
                <img src={arrowUp}></img>
              </Col>
              <Col s={3}>
                <div className='text red-text'>{day.temperature.max} °C</div>
              </Col>
              <Col s={3}>
                <img src={arrowDown}></img>
              </Col>
              <Col s={3}>
                <div className='text blue-text'>{day.temperature.min} °C</div>
              </Col>
            </Row>
            <Row>
              <Col s={3}>
                <img src={drop}></img>
              </Col>
              <Col s={3}>
                <div className='text'>{day.rain.precipitation} <span>mm</span></div>
              </Col>
              <Col s={3}>
                <img src={umbrella}></img>
              </Col>
              <Col s={3}>
                <div className='text'>{day.rain.probability} <span>%</span></div>
              </Col>
            </Row>
          </Row>
        </Card>
      ))
    )
  }
}
export default CardForecast;