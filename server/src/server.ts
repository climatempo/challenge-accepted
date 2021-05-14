import express, { Router, Request, Response, NextFunction } from 'express';
import cors from 'cors';

import AppError from './errors/AppError';

import localeRoutes from './routes/locale.routes';
import weatherRoutes from './routes/weather.routes';

const app = express();

app.use(cors());
app.use(express.json());

const routes = Router();

routes.use('/locales', localeRoutes);
routes.use('/weather', weatherRoutes);

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('server started on port 3333!');
});
