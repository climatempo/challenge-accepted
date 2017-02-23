import { REQUEST_WEATHER_INFO, ERROR_WEATHER_INFO, SUCCESS_WEATHER_INFO } from './actions';

export default function(state = {}, action) {
  switch (action.type) {
  case REQUEST_WEATHER_INFO:
    return Object.assign({}, state, {
    	isFetching: true,
    	didInvalidate: false
    });
  case ERROR_WEATHER_INFO:
    alert("Cidade não encontrada! :(")
    return Object.assign({}, state, {
    	isFetching: false,
    	didInvalidate: true,
    	error: action.err
    });
  case SUCCESS_WEATHER_INFO:
    return Object.assign({}, state, {
    	isFetching: false,
    	didInvalidate: false,
    	city: action.city,
    	weather: action.weather,
      period: action.period,
      locale: action.locale
    });
  default:
  	return state;
  }
}