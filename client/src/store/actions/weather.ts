import * as actionTypes from '../actionTypes';

export function getLocales(name?: string) {
	return async dispatch => {
		const res = await fetch('/locales' + (name ? `?name=${name}` : ''));
		const json = await res.json();
		
		const action = {
			type: actionTypes.GET_LOCALES,
			locales: json.locales,
		};

		dispatch(action);
	};
}

export function getWeatherByLocaleName(localeName: string) {
	return async dispatch => {
		const res = await fetch('/weather?localeName=' + localeName);
		const json = await res.json();

		const action = {
			type: actionTypes.GET_WEATHER_DETAILS,
			weatherDetails: json.weatherDetails,
		};

		dispatch(action);
	};
}