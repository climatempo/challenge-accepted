import { IndicesCreateRequest } from '@elastic/elasticsearch/lib/api/types';
import ElasticEngine from '../Engines/Elastic.engine';
import DummyIndexer from './Dummy.indexer';
import { toElastic } from '../Models/DailyWeather.model';
import {
    DAILY_WEATHER_CREATE_INDEX_REQUEST,
    INSTANT_WEATHER_CREATE_INDEX_REQUEST,
    LOCALE_CREATE_INDEX_REQUEST
} from '../Models/Elastic.model';

class Indexer {
    elastic = new ElasticEngine().client;
    dumpDummy = false;

    indexDummy = async () => {
        if(!this.dumpDummy)
            return;

        const dummy = new DummyIndexer;
        dummy.loadDummy();

        await this.elastic.bulk({
            operations: dummy.dummyLocales().flatMap(
                locale => [{ index: { _index: 'locale' } }, locale]
            )
        });

        await this.elastic.bulk({
            operations: dummy.dummyInstantWeathers().flatMap(
                weather => [{ index: { _index: 'instant-weather' } }, weather]
            )
        });

        await this.elastic.bulk({
            refresh: true,
            operations: dummy.dummyDailyWeathers().flatMap(
                weather => [{ index: { _index: 'daily-weather' } }, toElastic(weather)]
            )
        });

        console.log('Dummy data indexed.');
    }

    createIndex = async (index: string, request: IndicesCreateRequest) => {
        if(!await this.elastic.indices.exists({index})) {
            console.log(`Created index ${index} on elastic.`);
            await this.elastic.indices.create(request);
            this.dumpDummy = true;
        }
    }

    index = async () => {
        await this.createIndex('locale', LOCALE_CREATE_INDEX_REQUEST);
        await this.createIndex('instant-weather', INSTANT_WEATHER_CREATE_INDEX_REQUEST);
        await this.createIndex('daily-weather', DAILY_WEATHER_CREATE_INDEX_REQUEST);
    }

    execute = () => {
        this.elastic.info()
            .then(this.index)
            .then(this.indexDummy)
            .catch(console.error);
    }
}

export default Indexer;