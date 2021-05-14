import { Router } from 'express';
import LocalesController from '../controllers/LocalesController';

const routes = Router();
const localesController = new LocalesController();

routes.get('/', localesController.index);

export default routes;
