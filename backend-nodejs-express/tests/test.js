import request from 'supertest';
import '@babel/polyfill';

import setup from '../src/app';

const app = setup();

export default () => {
  return request(app);
};
