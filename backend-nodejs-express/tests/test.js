import request from 'supertest';
import '@babel/polyfill';

import setup from '../src/app';

const app = setup();

export default () => {
  return request(app);
};

export const test = (url) => {
  return request(app).get(url)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200);
};
