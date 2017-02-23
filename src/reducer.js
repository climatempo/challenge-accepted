import { CHANGE_CITY } from './actions';

function changeCity(state, newState) {
  return Object.assign({}, state, newState);
}

export default function(state = {}, action) {
  switch (action.type) {
  case CHANGE_CITY:
    return changeCity(state, action.cityWeather);
  default:
  	return state;
  }
}