
import BadRequestError from '../errors/badRequestError.error';
import LocaleInterface from '../interfaces/locale.interface';
import WeatherDetailsInterface from '../interfaces/weatherDetails.interface';
import getJson from '../utils/getJson';

class IndexService {
	public getAllLocales(): LocaleInterface[] {
		const locales = getJson('../../../base/locales.json') as LocaleInterface[];

		return locales;
	}

	public getLocaleByName(name: string | null): LocaleInterface {
		if (!name)
			throw new BadRequestError('name query cannot be null');

		const locales = getJson('../../../base/locales.json') as LocaleInterface[];

		const locale = locales.filter(l => (
			l.name.localeCompare(name.toString(), 'en', { sensitivity: 'base', }) == 0)
		)[0] || null;
		
		if (locale === null)
			throw new BadRequestError(`Locale with ${name} not found`);

		return locale;
	}

	public getWeatherByLocale(localeName : string | null): WeatherDetailsInterface {
		if (!localeName)
			throw new BadRequestError('Locale name query cannot be null');

		const WeatherDetailsArr = getJson('../../../base/weather.json') as WeatherDetailsInterface[];

		const WeatherDetails = WeatherDetailsArr.filter(a => (
			a.locale.name.localeCompare(localeName.toString(), 'en', { sensitivity: 'base', }) == 0
		))[0] || null;

		if (WeatherDetails === null)
			throw new BadRequestError(`Weather with locale ${localeName} not found`);

		return WeatherDetails;
	}
}

export default new IndexService();