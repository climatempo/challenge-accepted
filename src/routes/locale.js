import express from 'express';
import LocaleController from '../controllers/locale';
import Locale from '../models/locale';

const localeController = new LocaleController(Locale);

const router = express.Router();

router.get('/', localeController.get);
router.get('/:nome', localeController.getByName);

export default router;