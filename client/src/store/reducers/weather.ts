import { LocaleAction, LocaleState } from '../types';
import * as actionTypes from '../actionTypes';
import { AnyAction } from '@reduxjs/toolkit';

const INITIAL_STATE: LocaleState = {
	locales: [],
	weatherDetails: null,
};

export default function weather(state: LocaleState | undefined = INITIAL_STATE, action: LocaleAction | AnyAction): LocaleState {
	switch(action.type) {
	case actionTypes.GET_LOCALES:
		return {
			...state,
			locales: action.locales,
		};		
	
	case actionTypes.GET_WEATHER_DETAILS:
		return {
			...state,
			weatherDetails: action.weatherDetails,
		};
	}	

	return state;
}