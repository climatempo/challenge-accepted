import { SettingsAction, SettingsState } from '../types';
import * as actionTypes from '../actionTypes';
import { AnyAction } from '@reduxjs/toolkit';

const INITIAL_STATE: SettingsState = {
	temperature: 'C',
	rain: 'mm',
};

export default function settings(state: SettingsState | undefined = INITIAL_STATE, action: SettingsAction | AnyAction): SettingsState {
	switch(action.type) {
	case actionTypes.SET_TEMPERATURE:
		return {
			...state,
			temperature: action.temperature,
		};		
	
	case actionTypes.SET_RAIN:
		return {
			...state,
			rain: action.rain,
		};
	}	

	return state;
}