import http from './http';

export default class RegionSearchApi {
  static async searchByName(name) {
    return http.get(`/v1/regions?name=${name}`);
  }
}
