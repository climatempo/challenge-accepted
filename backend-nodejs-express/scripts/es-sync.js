import {
  createIndice,
  esBulkSync,
  removeAccents,
} from '../src/utils/elasticsearch';

import { getAllLocales } from '../src/services/region-search/model';

export const populateES = async () => {
  global.console.log('Running: populateES');
  const data = (await getAllLocales()).map(locale => ({
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
