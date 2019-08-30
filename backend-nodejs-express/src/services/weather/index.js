import { buildCheckFunction } from 'express-validator';

import Controller from './controller';

const check = buildCheckFunction(['query']);

export default (app) => {
  const base = '/api';
  app.get(`${base}/v1/weather`, [check('localeId').exists()], Controller.index);
};

export const weatherController = Controller;
