export default {
  HOST: 'http://127.0.0.1',
  PORT: ':3001',
  ROUTES: {
    GET_ALL_LOCALES: '/locales',
    GET_WEATHER_BY_CITY_NAME: '/weather/'
  },
  METHODS: {
    GET: 'GET'
  },
  HEADERS: {
  'Application': 'application/json',
  'Content-Type': 'application/json'
  }
}