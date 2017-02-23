import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './configureStore';

const store = configureStore();

render(<Provider store={store}> <App /> </Provider>, 
	document.getElementById('main'));