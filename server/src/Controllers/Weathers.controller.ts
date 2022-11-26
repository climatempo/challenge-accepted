import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempo.engine';
import ElasticEngine from '../Engines/Elastic.engine';
import DailyWeatherModel from '../Models/DailyWeather.model';
import DailyWeatherIndexer from '../Indexer/DailyWeather.indexer';

function WeathersController(request: Request<{ code: number }>, response: Response) {
    const code = request.params.code > 0 ? request.params.code : 3664;

    if(!code)
        return response.sendStatus(400);

    new ElasticEngine().client.search({
        index: 'daily-weather',
        query: {
            match: {
                idcity: code
            },
        },
        sort: [
            {
                date: 'desc'
            }
        ],
        size: 15
    }).then(({ hits: { hits } }) => {
        if(hits.length > 14) {
            response.json(hits.map(hit => hit._source as DailyWeatherModel).reverse())
            return true;
        }
        return false;
    }).then(elasticResult => {
        return new ClimaTempoEngine().detailedWeatherCollectionByCityCode(code)
            .then(weathers => {
                if(!elasticResult)
                    response.json(weathers);
                return new DailyWeatherIndexer().indexDailyWeathers(weathers);
            });
    }).catch((e) => {
        console.error(e);
        response.sendStatus(404);
    });
}

export default WeathersController;