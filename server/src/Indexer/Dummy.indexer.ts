import { readFileSync } from 'fs';
import Dummy from '../Models/Dummy.model';
import DetailedLocaleModel from '../Models/DetailedLocale.model';
import InstantWeatherModel from '../Models/InstantWeather.model';
import DailyWeatherModel from '../Models/DailyWeather.model';

/** Dummy data collected from https://www.climatempo.com.br using ClimaTempoEngine
 * The weathers is from 26/11/2022 to 10/12/2022 (15 days)
 * ### There is data from the following cities:
 * - Juiz de Fora, MG (Brasil)
 * - Chácara, MG (Brasil)
 * - Osasco, SP (Brasil)
 * - São Paulo, SP (Brasil)
 * - Fortaleza, CE (Brasil)
 * - Gramado, RS (Brasil)
 * - Porto de Galinhas, PE (Brasil)
 * - Rio de Janeiro, RJ (Brasil)
 * - Curitiba, PR (Brasil)
 * - Arraial do Cabo, RJ (Brasil)
 * - Natal, RN (Brasil)
 * - Campos do Jordão, SP (Brasil)
 * - Belo Horizonte, MG (Brasil)
 * - Angra dos Reis, RJ (Brasil)
 */
class DummyIndexer {
    dummy = [] as Dummy[];

    loadDummy = () => {
        try {
            const file = readFileSync('./src/dummy.json').toString();
            return this.dummy = JSON.parse(file) as Dummy[];
        }catch(e) {
            console.error(e);
            return [] as Dummy[];
        }
    }

    dummyLocales = (): DetailedLocaleModel[] => this.dummy.map(
        dummy => ({
            idlocale: dummy.idlocale,
            idcity: dummy.idcity,
            capital: dummy.capital,
            idcountry: dummy.idcountry,
            ac: dummy.ac,
            country: dummy.country,
            uf: dummy.uf,
            city: dummy.city,
            region: dummy.region,
            seaside: dummy.seaside,
            latitude: dummy.latitude,
            longitude: dummy.longitude,
            tourist: dummy.tourist,
            agricultural: dummy.agricultural,
            base: dummy.base,
            searchPoints: dummy.searchPoints
        } as DetailedLocaleModel)
    );

    dummyInstantWeathers = (): InstantWeatherModel[] => this.dummy.map(
        dummy => ({
            ...dummy.instant,
            idlocale: dummy.idlocale
        } as InstantWeatherModel)
    );

    dummyDailyWeathers = (): DailyWeatherModel[] => this.dummy.flatMap(
        dummy => dummy.weathers.map(
            weather => ({
                ...weather,
                idcity: dummy.idcity
            } as DailyWeatherModel)
        )
    );
}

export default DummyIndexer;