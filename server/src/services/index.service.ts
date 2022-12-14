
import BadRequestError from '../errors/badRequestError.error';
import LocaleInterface from '../interfaces/locale.interface';
import WeatherDetailsInterface from '../interfaces/weatherDetails.interface';
import getJson from '../utils/getJson';

class IndexService {
	public getLocales(name: string | null): LocaleInterface[] {
		const locales = getJson('../base/locales.json') as LocaleInterface[];
		if (!name)
			return locales;

		const nameNormalize = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
		const localesLikeName = locales.filter(l => {
			const lNormalize = l.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
			return lNormalize.includes(nameNormalize);
		});

		return localesLikeName;
	}

	public getWeatherByLocaleName(localeName : string | null): WeatherDetailsInterface {
		if (!localeName)
			throw new BadRequestError('Locale name query cannot be null');

		const WeatherDetailsArr = getJson('../base/weather.json') as WeatherDetailsInterface[];

		const WeatherDetails = WeatherDetailsArr.filter(a => (
			a.locale.name.localeCompare(localeName.toString(), 'en', { sensitivity: 'base', }) == 0
		))[0] || null;

		if (WeatherDetails === null)
			throw new BadRequestError(`Weather with locale ${localeName} not found`);

		return WeatherDetails;
	}
}

export default new IndexService();