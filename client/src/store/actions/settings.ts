import * as actionTypes from '../actionTypes';

export function setTemperature(temperature: string) {
	return async dispatch => {
		console.log('t', temperature);
		const action = {
			type: actionTypes.SET_TEMPERATURE,
			temperature,
		};

		dispatch(action);
	};
}

export function setRain(rain: string) {
	return async dispatch => {
		const action = {
			type: actionTypes.SET_RAIN,
			rain,
		};

		dispatch(action);
	};
}