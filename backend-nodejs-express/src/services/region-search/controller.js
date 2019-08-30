import { esGet } from '../../utils/elasticsearch';

import { getLocalesByName } from './model';

export default class Controller {
  static async index({ query: { name } }, res) {
    let locales = [];

    if (name) {
      const payload = {
        query: {
          query_string : {
            query: `*${name}*`,
            fields: ['name', 'key'],
          },
        },
      };

      try {
        await esGet('locales', payload).then(({ body: { hits: { hits } } }) => {
          locales = hits.map(({ _source: locale }) => ({ id: locale.id, name: locale.name }));
        });
      } catch (err) {
        locales = await getLocalesByName(name);
        global.console.error(err);
      }
    }

    res.send({ locales });
  }
}
