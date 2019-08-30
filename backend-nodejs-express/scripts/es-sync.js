import path from 'path';

import {
  createIndice,
  esBulkSync,
  removeAccents,
} from '../src/utils/elasticsearch';

const LOCALES = require(path.resolve(`${__dirname}/../../base/locales.json`));

export const populateES = async () => {
  global.console.log('Running: populateES');
  const data = LOCALES.map(locale => ({
    id: locale.id,
    name: locale.name,
    key: removeAccents(locale.name),
  }));
  await createIndice('locales');
  return esBulkSync('locales', data).then((resp) => {
    global.console.log('Finished: populateES');
    return resp;
  });
};

populateES().then(() => process.exit(0));
