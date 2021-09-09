import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './components/Clima/clima'

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = { Index }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes