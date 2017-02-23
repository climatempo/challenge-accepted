import React from 'react';
import { render } from 'react-dom';
import {AppContainer} from './components/App';
import configureStore from './configureStore';

const store = configureStore();

render(<Provider store={store}> <AppContainer /> </Provider>, 
	document.getElementById('main'));