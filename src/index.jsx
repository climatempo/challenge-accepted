import React from 'react';
import { render } from 'react-dom';
import './assets/styles/reset.css';
import './assets/styles/styles-global.scss';
import { Provider } from 'react-redux';
import store from './store';

import App from './app';

const ROOT = document.querySelector('[data-js="root"]');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT,
);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./app', render);
}
