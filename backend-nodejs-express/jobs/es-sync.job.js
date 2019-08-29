import { esBulkSync } from '../src/utils/elasticsearch';

export const populateES = async () => {
  global.console.log('Running: populateES');
  return esBulkSync('', []).then((resp) => {
    global.console.log('Finished: populateES');
    return resp;
  });
};

populateES().then(() => process.exit(1));
