import { combineReducers } from 'redux';
import { appReducer } from './app';
import { weatherReducer } from './weather';

export default combineReducers({
  app: appReducer,
  weather: weatherReducer,
});
