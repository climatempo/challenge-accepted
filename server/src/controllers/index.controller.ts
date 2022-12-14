import { Request, Response } from 'express';
import logger from '../config/logger';
import BadRequestError from '../errors/badRequestError.error';
import indexService from '../services/index.service';

class indexController {
	public async getLocales(req: Request, res: Response): Promise<Response> {
		logger.info(`Calling ${req.originalUrl}`);

		const { name, } = req.query;

		try {
			const locales = indexService.getLocales(name ? name.toString() : null);
			logger.info('Locales searched successfully');
			return res.status(200).send({ message: 'Locales searched successfully', locales, });
		} catch (e) {
			logger.info(e.message);
			if (e instanceof BadRequestError)
				return res.status(e.status).send({ message: e.message, locales: null, });
		}
	}

	public async getWeatherByLocaleName(req: Request, res: Response): Promise<Response> {
		logger.info(`Calling ${req.originalUrl}`);

		const { localeName, } = req.query;

		try {
			const weatherDetails = indexService.getWeatherByLocaleName(localeName ? localeName.toString() : null);
			logger.info('Weather searched successfully');
			return res.status(200).send({ message: 'Weather searched successfully', weatherDetails, });
		} catch (e) {
			logger.info(e.message);
			if (e instanceof BadRequestError)
				return res.status(e.status).send({ message: e.message, weatherDetails: null, });
		}
	}
}

export default new indexController();