import ElasticEngine from '../Engines/Elastic.engine';
import DailyWeatherModel, { toElastic } from '../Models/DailyWeather.model';

class DailyWeatherIndexer {
    indexDailyWeather = async (weather: DailyWeatherModel) => {
        await new ElasticEngine().client.search({
            index: 'daily-weather',
            query: {
                bool: {
                    must: [
                        {
                            match: {
                                idcity: weather.idcity
                            }
                        },
                        {
                            match: {
                                date: weather.date
                            }
                        },
                    ]
                }
            }
        }).then(({ hits: { hits }}) => {
            if(hits.length == 0)
                return new ElasticEngine().client.index({
                    refresh: true,
                    index: 'daily-weather',
                    document: toElastic(weather)
                });
        })
    }

    indexDailyWeathers = async (weathers: DailyWeatherModel[]) => weathers.map(this.indexDailyWeather);
}

export default DailyWeatherIndexer;