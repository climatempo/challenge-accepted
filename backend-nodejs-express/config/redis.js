import { ENV_TEST } from '../src/constants';

require('dotenv').config({
  path: (process.env.NODE_ENV !== ENV_TEST) ? '.env' : '.env.test',
});

module.exports = {
  host: process.env.CACHE_HOST,
  port: process.env.CACHE_PORT,
  prefix: process.env.CACHE_PREFIX,
};
