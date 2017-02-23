import React from 'react';
import { render } from 'react-dom';
import {AppContainer} from './components/App';
import configureStore from './configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

render(<Provider store={store}><AppContainer /></Provider>, 
	document.getElementById('main'));