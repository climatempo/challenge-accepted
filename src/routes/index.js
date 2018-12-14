import express from 'express';
import localeRoute from '../routes/locale';

const router = express.Router();

router.use('/locales', localeRoute);

export default router;