
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weather';
import settingsReducer from './reducers/settings';

const store = configureStore({
	reducer: {
		weather: weatherReducer,
		settings: settingsReducer,
	},
});

export default store;