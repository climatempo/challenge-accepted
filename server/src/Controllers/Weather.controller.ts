import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempo.engine';
import ElasticEngine from '../Engines/Elastic.engine';
import DailyWeatherModel from '../Models/DailyWeather.model';
import DailyWeatherIndexer from '../Indexer/DailyWeather.indexer';

function Weather(request: Request<{ code: number }>, response: Response) {
    const code = request.params.code > 0 ? request.params.code : 0;

    if(!code)
        return response.sendStatus(400);

    new ElasticEngine().client.search({
        index: 'daily-weather',
        query: {
            bool: {
                must: [
                    {
                        match: {
                            idcity: code
                        },
                    },
                    {
                        match_phrase: {
                            date: new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000 )).toISOString().slice(0, 10)
                        },
                    },
                ]
            }
        }
    }).then(({ hits: { hits } }) => {
        if(hits.length > 0) {
            response.json(hits[0]._source as DailyWeatherModel);
            return true;
        }
        return false;
    }).then(elasticResult => {
        return new ClimaTempoEngine().detailedWeatherCollectionByCityCode(code)
            .then(weathers => {
                if(!elasticResult)
                    response.json(weathers[0]);
                return new DailyWeatherIndexer().indexDailyWeathers(weathers);
            });
    }).catch((e) => {
        console.error(e);
        response.sendStatus(404);
    });
}

export default Weather;