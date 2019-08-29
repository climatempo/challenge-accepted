import Controller from './controller';

export default (app) => {
  const base = '/api';
  app.get(`${base}/v1/region`, Controller.index);
};

export const weatherController = Controller;
