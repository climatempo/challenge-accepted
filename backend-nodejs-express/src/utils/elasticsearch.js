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
  return client.bulk({ index: type, body });
};

