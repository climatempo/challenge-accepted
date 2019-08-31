import {
  createIndice,
  esBulkSync,
  removeAccents,
} from '../src/utils/elasticsearch';

import { getAllRegions } from '../src/services/region-search/model';

export const populateES = async () => {
  const data = (await getAllRegions()).map(region => ({
    id: region.id,
    name: region.name,
    key: removeAccents(region.name),
  }));
  await createIndice('regions');
  return esBulkSync('regions', data).then((resp) => {
    return resp;
  });
};

global.console.log('Running: populateES ...');
setInterval(() => {
  populateES().then(() => {
    global.console.log('Finished: populateES');
    process.exit();
  });
}, 3000);
