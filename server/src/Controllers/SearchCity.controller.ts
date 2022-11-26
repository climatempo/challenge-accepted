import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempo.engine';
import ElasticEngine from '../Engines/Elastic.engine';
import DetailedLocaleModel from '../Models/DetailedLocale.model';
import LocaleIndexer from '../Indexer/Locale.indexer';

async function SearchCityController(request: Request<{ name: string }>, response: Response) {
    const name = request.params.name;

    if(!name || name.length < 3)
        return response.sendStatus(400);
    if(name.length > 100)
        return response.sendStatus(413);

    new ElasticEngine().client.search({
        index: 'locale',
        query: {
            fuzzy: {
                city: name
            },
        }
    }).then(({hits: { hits }}) => {
        if(hits.length > 0) {
            response.json(hits.map(hit => hit._source as DetailedLocaleModel))
            return true;
        }
        return false;
    }).then(elasticResult => new ClimaTempoEngine()
        .citiesFromSearchByName(name).then(cities => {
            if(!elasticResult)
                response.json(cities);
            return new LocaleIndexer().indexDetailedLocales(cities);
        })
    ).catch((e) => {
        console.error(e);
        response.sendStatus(404);
    });
}

export default SearchCityController;