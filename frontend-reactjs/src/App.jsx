import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Weather from './containers/Weather';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Weather} />
    </Switch>
  </BrowserRouter>
);

export default function App() {
  return <Router />;
}
