import LocaleInterface from './locale.interface';
import PeriodInterface from './period.interface';
import WeatherInterface from './weather.interface';

interface WeatherDetailsInterface {
	period: PeriodInterface;
	locale: LocaleInterface;
	weather: WeatherInterface[];
}

export default WeatherDetailsInterface;