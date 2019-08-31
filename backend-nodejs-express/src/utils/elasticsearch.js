import { Client } from '@elastic/elasticsearch';

import esConfig from '../../config/elasticsearch';

const client = esConfig.node ? new Client(esConfig) : {
  search: () => Promise.resolve([]),
};

export default client;

export const esGet = (resource, query) => {
  return client.search({
    index: resource,
    body: JSON.stringify(query),
  });
};

export const esBulkSync = (type, data) => {
  let body = '';
  data.forEach(d => {
    body += `{ "index" : { "_index" : "${type}", "_id" : "${d.id}"} }\n`;
    body += `${JSON.stringify(d)}\n`;
  });
  return client.bulk({ index: type, body }).catch((err) => global.console.error(err));
};

export const createIndice = (index) => {
  return client.indices.create({ index }).catch(() => {});
};

export const removeAccents = (value) => {
  return value.toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/æ/g, 'ae')
    .replace(/ç/g, 'c')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/ñ/g, 'n')
    .replace(/[òóôõö]/g, 'o')
    .replace(/œ/g, 'oe')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ýÿ]/g, 'y');
};
