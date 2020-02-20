import '../../../public/css/weather.css';

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Icon } from 'antd';

import WeatherList from './WeatherList';
import WeatherSearch from './WeatherSearch';
import ShowComponent from '../utils/ShowComponent';

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.store = props.weatherStore;
  }

  render() {
    let locale = this.store.locale;
    let loading = () => <div className="loading" />;
    return (
      <Row>
        <Col>
          <WeatherSearch onSearch={value => this.store.getLocale(value)} />
          <ShowComponent case={this.store.loading}>
            <Row type="flex" justify="center">
              <Col style={{ textAlign: 'center' }}>
                <Icon component={loading} className="anticon-spin" />
                <div>Por favor aguarde...</div>
              </Col>
            </Row>
          </ShowComponent>
          <ShowComponent case={!this.store.loading && locale.locale}>
            <WeatherList locale={locale.locale} list={locale.weather} />
          </ShowComponent>
        </Col>
      </Row>
    );
  }
}

export default observer(WeatherContainer);
