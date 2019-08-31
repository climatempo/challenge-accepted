import { esGet } from '../../utils/elasticsearch';

import { getRegionsByName } from './model';

export default class Controller {
  static async index({ query: { name } }, res) {
    let regions = [];

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
        await esGet('regions', payload).then(({ body: { hits: { hits } } }) => {
          regions = hits.map(({ _source: region }) => ({ id: region.id, name: region.name }));
        });
      } catch (err) {
        regions = await getRegionsByName(name);
        global.console.error(err);
      }
    }

    res.send({ regions });
  }
}
