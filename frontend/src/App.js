import React from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route,
} from 'react-router-dom';

import Weather from './pages/Weather';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Weather />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
