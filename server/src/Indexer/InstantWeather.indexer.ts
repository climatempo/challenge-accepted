import ElasticEngine from '../Engines/Elastic.engine';
import InstantWeatherModel from '../Models/InstantWeather.model';

class LocaleIndexer {
    indexInstantWeather = async (weather: InstantWeatherModel) => {
        await new ElasticEngine().client.search({
            index: 'instant-weather',
            query: {
                bool: {
                    must: [
                        {
                            match: {
                                idlocale: weather.idlocale
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
                    index: 'instant-weather',
                    document: weather
                });
        })
    }
}

export default LocaleIndexer;