import http from './http';

export default class WeatherApi {
  static async getByLocaleId(localeId) {
    return http.get(`/v1/weather?localeId=${localeId}`);
  }
}
