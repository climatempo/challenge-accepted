import * as actionTypes from '../actionTypes';

export function getLocales() {
	return async dispatch => {
		const res = await fetch('/locales');
		const json = await res.json();
		const action = {
			type: actionTypes.GET_LOCALES,
			locales: json.locales,
		};

		dispatch(action);
	};
}