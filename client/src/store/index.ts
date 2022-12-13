
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weather';

const store = configureStore({
	reducer: {
		weather: weatherReducer,
	},
});

export default store;