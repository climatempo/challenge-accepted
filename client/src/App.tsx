import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import store from './store/index';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<Header />
					<Weather />
				</Provider>
			</div>
		);
	}
}

export default App;
