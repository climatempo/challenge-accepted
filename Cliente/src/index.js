import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import routes from './routes'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {routes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} component={route.main}/>))}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);