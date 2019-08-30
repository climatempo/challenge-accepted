import { getFromCacheIfExists } from '../../utils/cache';

import { getWeatherByLocaleId } from './model';

export default class Controller {
  static async index({ query: { localeId } }, res) {
    const cacheKey = `:ẁeather:${localeId}`;
    const weather = await getFromCacheIfExists(cacheKey, getWeatherByLocaleId, {
      localeId: parseInt(localeId, 10),
    }, 60);
    res.send({ weather });
  }
}
