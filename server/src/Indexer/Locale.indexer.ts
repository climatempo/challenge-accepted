import DetailedLocaleModel from '../Models/DetailedLocale.model';
import ElasticEngine from '../Engines/Elastic.engine';

class LocaleIndexer {
    indexDetailedLocale = async (locale: DetailedLocaleModel) => {
        await new ElasticEngine().client.search({
            index: 'locale',
            query: {
                bool: {
                    must: {
                        match: {
                            idlocale: locale.idlocale
                        }
                    }
                }
            }
        }).then(({ hits: { hits }}) => {
            if(hits.length == 0)
                return new ElasticEngine().client.index({
                    refresh: true,
                    index: 'locale',
                    id: locale.city,
                    document: locale
                });
        })
    }

    indexDetailedLocales = async (locales: DetailedLocaleModel[]) => locales.map(this.indexDetailedLocale);
}

export default LocaleIndexer;