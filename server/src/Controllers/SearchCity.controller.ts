import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempoEngine';

async function SearchCityController(request: Request<{ name: string }>, response: Response) {
    const name = request.params.name;

    if(name.length < 3)
        return response.json([]);

    new ClimaTempoEngine().citiesFromSearchByName(name)
        .then(cities => response.json(cities))
}

export default SearchCityController;