import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

export default function Routes() {
  return (
    <Switch>
      {routes.map(({ path, exact, component: Component }) => (
        <Route key={path} path={path} exact={exact} component={Component} />
      ))}
    </Switch>
  );
}
