import React, { Component } from 'react';
import moment from 'moment';

import RegionSearchApi from '../services/region-search';
import WeatherApi from '../services/weather';

import Autocomplete from '../components/Autocomplete';
import WeatherComponent, { Message } from '../components/weather/weather';

import throttle from '../utils/throttle';

export default class Weather extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      regions: [],
      weather: null,
    };

    this.throttle = throttle(1000);
  }

  getWeather() {
    const { text, regions } = this.state;
    let region = regions.find((r) => r.name === text);
    region = region || regions.find((c) => c.name.match(new RegExp(text, 'gi'))); // Fix firefox bug with datalist
    WeatherApi.getByLocaleId(region.id).then((resp) => {
      const { weather } = resp.data;
      weather.weather.forEach((w) => {
        w.formatedDate = moment(w.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
      });
      this.setState({ weather });
    });
  }

  search(value) {
    this.setState({ text: value }, () => {
      if (value && value.length) {
        this.throttle(() => {
          RegionSearchApi.searchByName(value).then((resp) => {
            this.setState({ regions: resp.data.locales });
          });
        });
      }
    });
  }

  render() {
    const { regions, text, weather } = this.state;
    return (
      <>
        <Autocomplete
          list={regions}
          value={text}
          onChange={({ target: { value } }) => this.search(value)}
          onSearch={() => this.getWeather()}
        />
        {weather ? (
          <WeatherComponent weather={weather} />
        ) : (
          <Message />
        )}
      </>
    );
  }
}
