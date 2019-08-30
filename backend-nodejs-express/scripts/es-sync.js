import {
  createIndice,
  esBulkSync,
  removeAccents,
} from '../src/utils/elasticsearch';

import { getAllLocales } from '../src/services/region-search/model';

export const populateES = async () => {
  const data = (await getAllLocales()).map(locale => ({
    id: locale.id,
    name: locale.name,
    key: removeAccents(locale.name),
  }));
  await createIndice('locales');
  return esBulkSync('locales', data).then((resp) => {
    return resp;
  });
};

global.console.log('Running: populateES ...');
setInterval(() => {
  populateES().then(() => {
    global.console.log('Finished: populateES');
    process.exit(0);
  });
}, 3000);
