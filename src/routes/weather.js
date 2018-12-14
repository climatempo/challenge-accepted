import express from 'express';
import WeatherController from '../controllers/weather';

const weatherController = new WeatherController();

const router = express.Router();

router.get('/', (req, res) => weatherController.get(req, res));
router.get('/:name', (req, res) => weatherController.getByName(req, res));

export default router;