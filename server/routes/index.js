import express from 'express';
import IndexController from '../controllers/index';
import localeRoute from '../routes/locale';
import weatherRoute from '../routes/weather';

const router = express.Router();
const indexController = new IndexController();

router.get('/', (req, res) => indexController.get(req, res));
router.use('/locales', localeRoute);
router.use('/weathers', weatherRoute);

export default router;