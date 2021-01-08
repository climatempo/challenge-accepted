import 'reflect-metadata';
import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';

import routes from './http/routes';
import errorHandler from '../errors/handler';

class App {
  public server: Express;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());

    this.server.use(cors());
    this.server.use(helmet());
  }

  routes() {
    this.server.use(routes);
    this.server.use(errorHandler);
  }
}

export default new App().server;
