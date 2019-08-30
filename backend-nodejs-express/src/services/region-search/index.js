import { buildCheckFunction } from 'express-validator';

import Controller from './controller';

const check = buildCheckFunction(['query']);

export default (app) => {
  const BASE = '/api';
  app.get(`${BASE}/v1/regions`, [check('name').exists()], Controller.index);
};

export const regionSearchController = Controller;
