import { Router } from 'express';
import LocaleController from '../controllers/LocaleController';

const routes = Router();

routes.get('/', LocaleController.index);

export default routes;
