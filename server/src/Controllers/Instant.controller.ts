import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempo/ClimaTempo.engine';
import ElasticEngine from '../Engines/Elastic.engine';
import InstantWeatherModel from '../Models/InstantWeather.model';
import InstantWeatherIndexer from '../Indexer/InstantWeather.indexer';

function InstantController(request: Request<{ id: number }>, response: Response) {
    const id = request.params.id > 0 ? request.params.id : 0;

    if(!id)
        return response.sendStatus(400);

    new ElasticEngine().client.search({
        index: 'instant-weather',
        query: {
            match: {
                idlocale: id
            }
        }
    }).then(({hits: { hits }}) => {
        if(hits.length > 0)
            response.json(hits[0]._source as InstantWeatherModel)
        else return new ClimaTempoEngine().weatherByCityId(id)
            .then(weather => {
                response.json(weather);
                return new InstantWeatherIndexer().indexInstantWeather(weather);
            });
    }).catch((e) => {
        console.error(e);
        response.sendStatus(404);
    });
}

export default InstantController;