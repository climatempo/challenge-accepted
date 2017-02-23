export const CHANGE_CITY = 'CHANGE_CITY';

export function changeCity(cityWeather) {
  return {
    type: CHANGE_CITY,
    cityWeather
  };
}