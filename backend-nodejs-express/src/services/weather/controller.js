import { getFromCacheIfExists } from '../../utils/cache';

import { getWeatherByLocaleId } from './model';

export default class Controller {
  static async index({ query: { localeId } }, res) {
    let weather = null;
    const cacheKey = `:ẁeather:${localeId}`;

    if (localeId) {
      weather = await getFromCacheIfExists(cacheKey, getWeatherByLocaleId, {
        localeId: parseInt(localeId, 10),
      }, 60);
    }

    res.send({ weather });
  }
}
