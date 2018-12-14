import express from 'express';
import localeRoute from '../routes/locale';
import weatherRoute from '../routes/weather';

const router = express.Router();

router.use('/locales', localeRoute);
router.use('/weathers', weatherRoute);

export default router;