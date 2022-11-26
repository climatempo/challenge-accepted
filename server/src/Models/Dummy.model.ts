import DetailedLocaleModel from './DetailedLocale.model';
import InstantWeatherModel from './InstantWeather.model';
import DailyWeatherModel from './DailyWeather.model';

type Dummy = DetailedLocaleModel & {
    instant: InstantWeatherModel,
    weathers: DailyWeatherModel[]
};

export default Dummy;