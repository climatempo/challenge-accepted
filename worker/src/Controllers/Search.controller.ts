import ClimaTempoEngine from '../Engines/ClimaTempo/ClimaTempo.engine';
import DetailedLocaleModel from '../Models/DetailedLocale.model';

async function SearchCityController(search: string): Promise<DetailedLocaleModel[]> {
    const name = search;

    if(!name || name.length < 3)
        return Promise.reject(400);
    if(name.length > 100)
        return Promise.reject(413);

    return new ClimaTempoEngine().citiesFromSearchByName(name);
}

export default SearchCityController;