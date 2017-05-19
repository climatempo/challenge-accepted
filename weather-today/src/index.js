import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './Home/';
import SearchBox from './SearchBox/'
import App from './App';

ReactDOM.render(

  (<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/busca' component={SearchBox}/>
    </Route>
  </Router>),
  document.getElementById('root')
);
