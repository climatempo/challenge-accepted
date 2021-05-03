import Router from 'express';
import localesRouter from './locales.routes';
import weathersRouter from './weathers.routes';

const routes = Router();

routes.use('/locales', localesRouter);
routes.use('/weathers', weathersRouter);

export default routes;