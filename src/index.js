import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './css/style.css';
import App from './components/App/App';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

