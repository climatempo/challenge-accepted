import { LocaleAction, LocaleState } from '../types';
import * as actionTypes from '../actionTypes';
import { AnyAction } from '@reduxjs/toolkit';

const INITIAL_STATE: LocaleState = {
	locales: [],
};

export default function weather(state: LocaleState | undefined = INITIAL_STATE, action: LocaleAction | AnyAction): LocaleState {
	switch(action.type) {
	case actionTypes.GET_LOCALES:
		return {
			...state,
			locales: action.locales,
		};		
	}	

	return state;
}