import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

import services from './services';

import { ENV_PROD, ENV_TEST } from './constants';

require('dotenv').config({
  path: process.env.NODE_ENV !== ENV_TEST ? '.env' : '.env.test',
});

export const isProductionMode = (process.env.NODE_ENV === ENV_PROD);

export default () => {
  const app = express();

  app.use(helmet());

  app.use(bodyParser.json({ limit: '10mb', extended: true }));

  app.use(cors({
    origin: '*',
    methods: 'GET',
    optionsSuccessStatus: 200,
  }));

  app.get('/api', (_, res) => res.send('ok'));

  services(app);

  return app;
};
