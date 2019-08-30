import { esGet } from '../../utils/elasticsearch';

import { getLocalesByName } from './model';

export default class Controller {
  static async index({ query }, res) {
    let locales = [];

    const payload = {
      query: {
        query_string : {
          query: `*${query.name}*`,
          fields: ['name', 'key'],
        },
      },
    };

    try {
      await esGet('locales', payload).then(({ body: { hits: { hits } } }) => {
        locales = hits.map(({ _source: locale }) => ({ id: locale.id, name: locale.name }));
      });
    } catch (err) {
      locales = await getLocalesByName(query.name);
      global.console.error(err);
    }

    res.send({ locales });
  }
}
