import { Router } from 'express';
import localeRoutes from '../../../modules/locales/routes/locale.routes';

const routes = Router();

routes.use('/locales', localeRoutes);

export default routes;
