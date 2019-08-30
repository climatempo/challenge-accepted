import { esGet } from '../../utils/elasticsearch';

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

    const { body } = await esGet('locales', payload);

    if (body) {
      const { hits } = body.hits;
      locales = hits.map(h => ({ ...h._source }));
    }

    res.send({ locales });
  }
}
