import React, { Component } from 'react';
import moment from 'moment';
import { Row, Col, Card, Typography } from 'antd';

import MapComponent from '../utils/MapComponent';

const { Meta } = Card;

export default class WeatherList extends Component {
  render() {
    return (
      <Row gutter={[16, 16]} className="weather-list">
        <Typography.Title level={3}>
          Previsão para {this.props.locale.name}-{this.props.locale.state}
        </Typography.Title>
        <MapComponent data={this.props.list}>
          <WeatherCard />
        </MapComponent>
      </Row>
    );
  }
}

const WeatherCard = props => (
  <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={3}>
    <Card
      size="small"
      className="weather-card"
      title={<Meta title={moment(props.date).format('DD/MM/YYYY')} description={props.text} />}
    >
      <Row>
        <Col className="weather-card-icon max" span={4} />
        <Col className="weather-card-info max" span={8}>
          {props.temperature.max}ºC
        </Col>
        <Col className="weather-card-icon min" span={4} />
        <Col className="weather-card-info min" span={8}>
          {props.temperature.max}ºC
        </Col>
      </Row>
      <Row>
        <Col className="weather-card-icon precipitation" span={4} />
        <Col className="weather-card-info" span={8}>
          {props.rain.precipitation}mm
        </Col>
        <Col className="weather-card-icon probability" span={4} />
        <Col className="weather-card-info" span={8}>
          {props.rain.probability}%
        </Col>
      </Row>
    </Card>
  </Col>
);
