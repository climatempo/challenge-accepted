import { Request, Response } from 'express';
import BadRequestError from '../errors/badRequestError.error';
import indexService from '../services/index.service';

class indexController {
	public async getAllLocales(req: Request, res: Response): Promise<Response> {

		try {
			const locales = indexService.getAllLocales();
			return res.status(200).send({ message: 'Locales searched successfully', locales, });
		} catch (e) {
			if (e instanceof BadRequestError)
				return res.status(e.status).send({ message: e.message, locales: null, });
		}
	}

	public async getLocaleByName(req: Request, res: Response): Promise<Response> {

		const { name, } = req.params;

		try {
			const locale = indexService.getLocaleByName(name ? name.toString() : null);
			return res.status(200).send({ message: 'Locale searched successfully', locale, });
		} catch (e) {
			if (e instanceof BadRequestError)
				return res.status(e.status).send({ message: e.message, locale: null, });
		}
	}

	public async getWeatherByLocale(req: Request, res: Response): Promise<Response> {
		const { localeName, } = req.query;

		try {
			const weatherDetails = indexService.getWeatherByLocale(localeName ? localeName.toString() : null);
			return res.status(200).send({ message: 'Weather searched successfully', weatherDetails, });
		} catch (e) {
			if (e instanceof BadRequestError)
				return res.status(e.status).send({ message: e.message, weatherDetails: null, });
		}
	}
}

export default new indexController();