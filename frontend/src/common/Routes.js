import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider, inject } from 'mobx-react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AppStore from './AppStore';
import CommonPage from './CommonPage';
import WeatherContainer from '../components/weather/WeatherContainer';

export default class Routes extends Component {
  render() {
    return (
      <Provider {...AppStore}>
        <BrowserRouter>
          <Switch>
            <CommonPage>
              <Route exact path="/" component={inject('weatherStore')(WeatherContainer)} />
            </CommonPage>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
