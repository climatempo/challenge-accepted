import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Localidades from '../pages/Localidades';

function Routes() {
    return (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/localidades" component={Localidades} />
    </Switch>
    );
};

export default Routes;