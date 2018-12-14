import express from 'express';
import LocaleController from '../controllers/locale';

const localeController = new LocaleController();

const router = express.Router();

router.get('/', (req, res) => localeController.get(req, res));
router.get('/:name', (req, res) => localeController.getByName(req, res));

export default router;