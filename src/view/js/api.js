/* globals fetch */
class API {
  static findLocales() {
    return fetch('/locales').then(data => data.json());
  }

  static findWeathers() {
    return fetch('/weathers').then(data => data.json());
  }
}

export default API;
