import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider, inject } from 'mobx-react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import AppStore from './AppStore';
import CommonPage from './CommonPage';
import SearchLocationPage from '../components/weather/SearchLocation';

/**
 * Encapsula o componente de rotas no container principal
 * @param {*} param0 
 */
const CommonRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      <CommonPage {...props}>
        <Component {...props} />
      </CommonPage>
    }
  />
);

/**
 * Gerenciamento de rotas da aplicação
 */
export default class Routes extends Component {
  render() {
    return (
      <Provider {...AppStore}>
        <BrowserRouter>
          <Switch>
            <CommonRoute exact path="/" component={inject('searchLocationStore')(SearchLocationPage)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
