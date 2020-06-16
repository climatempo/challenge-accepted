import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
