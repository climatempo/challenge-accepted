import elastic from './Elastic';
import ElasticEngine from './Elastic';
import ClimaTempoEngine from './ClimaTempoEngine';
import { Request, Response } from 'express';

export const SEARCH_ENGINE_ELASTIC = 'elastic';
export const SEARCH_ENGINE_CLIMATEMPO = 'climatempo';

class SearchEngine {
    static engine = SEARCH_ENGINE_CLIMATEMPO;

    search = (request: Request, response: Response) => {
        switch(SearchEngine.engine) {
            case SEARCH_ENGINE_CLIMATEMPO:
                this.searchWithClimaTempo(request.params.city);
                break;
            default:
                this.searchWithElastic(request.params.city);
                break;
        }
    }

    async searchWithElastic(query:string) {
        await ElasticEngine.elastic.search({
            index: 'locales',
            query: {
                match: {
                    locale: query
                }
            }
        });
    }

    async searchWithClimaTempo(query:string) {
        await new ClimaTempoEngine().citiesFromSearchByName(query);
    }
}

export default SearchEngine;