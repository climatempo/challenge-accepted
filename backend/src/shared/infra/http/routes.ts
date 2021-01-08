import { Router } from 'express';
import localeRoutes from '../../../modules/locales/routes/locale.routes';
import weatherRoutes from '../../../modules/weather/routes/weather.routes';

const routes = Router();

routes.use('/locales', localeRoutes);
routes.use('/weather', weatherRoutes);

export default routes;
