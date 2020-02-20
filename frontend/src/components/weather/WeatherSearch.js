import React, { Component } from 'react';

import { Row, Col, Input, Card } from 'antd';
const { Search } = Input;

export default class WeatherSearch extends Component {
  render() {
    return (
      <Row type="flex" justify="center" className="weather-search">
        <Col xs={24} sm={24} md={14} lg={12} xl={12} xxl={12}>
          <Search placeholder="Digite a localidade..." onSearch={this.props.onSearch} enterButton />
        </Col>
      </Row>
    );
  }
}
