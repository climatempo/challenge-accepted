import { Client } from '@elastic/elasticsearch';

import esConfig from '../../config/elasticsearch';

const client = new Client(esConfig);

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
    .replace(new RegExp(/[àáâãäå]/g), 'a')
    .replace(new RegExp(/æ/g), 'ae')
    .replace(new RegExp(/ç/g), 'c')
    .replace(new RegExp(/[èéêë]/g), 'e')
    .replace(new RegExp(/[ìíîï]/g), 'i')
    .replace(new RegExp(/ñ/g), 'n')
    .replace(new RegExp(/[òóôõö]/g), 'o')
    .replace(new RegExp(/œ/g), 'oe')
    .replace(new RegExp(/[ùúûü]/g), 'u')
    .replace(new RegExp(/[ýÿ]/g), 'y');
};
