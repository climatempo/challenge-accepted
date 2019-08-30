import Controller from './controller';

export default (app) => {
  const BASE = '/api';
  app.get(`${BASE}/v1/regions`, Controller.index);
};

export const regionSearchController = Controller;
