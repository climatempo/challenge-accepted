import fetch from 'isomorphic-fetch'

export const CHANGE_CITY = 'CHANGE_CITY';
export const REQUEST_WEATHER_INFO = 'REQUEST_WEATHER_INFO'
export const SUCCESS_WEATHER_INFO = 'SUCCESS_WEATHER_INFO'
export const ERROR_WEATHER_INFO = 'ERROR_WEATHER_INFO'

function requestWeatherInfo(city) {
  return {
    type: REQUEST_WEATHER_INFO,
    city
  }
}

function receiveWeatherInfo(city, json) {
  return {
    type: SUCCESS_WEATHER_INFO,
    city,
    weather: json.weather,
    period: json.period,
    locale: json.locale
  }
}

function errorWeatherInfo(json) {
  return {
    type: ERROR_WEATHER_INFO,
    err: json
  }
}

export function fetchWeatherInfo(city) {
  return function (dispatch) {
    dispatch(requestWeatherInfo(city));
    return fetch(`/api/weather/${city}`)
      .then(response => response.json())
      .then(json => {
        if (!json.message)
          dispatch(receiveWeatherInfo(city, json))
        else
          dispatch(errorWeatherInfo(json))
      })
      .catch(err => dispatch(errorWeatherInfo(err)))
  }
}