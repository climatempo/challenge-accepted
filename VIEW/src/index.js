import React from 'react';
import { render } from 'react-dom';

import Routes from './common/Routes';

const load = () => render(<Routes />, document.getElementById('root'), () => {});

if (module.hot) {
  module.hot.accept('./common/Routes', load);
}

load();
