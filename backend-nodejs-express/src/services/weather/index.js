import Controller from './controller';

export default (app) => {
  const base = '/api';
  app.get(`${base}/v1/weather`, Controller.index);
};

export const weatherController = Controller;
