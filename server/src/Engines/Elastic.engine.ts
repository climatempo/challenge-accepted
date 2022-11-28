import { Client } from '@elastic/elasticsearch';

class ElasticEngine {
    private static elastic: Client;

    client = ElasticEngine.elastic ? ElasticEngine.elastic : ElasticEngine.elastic = new Client({
        node: process.env.ELASTIC_HOST,
        auth: {
            username: process.env.ELASTIC_USER || 'elastic',
            password: process.env.ELASTIC_PASSWORD || 'DontUseMe'
        }
    });
}

export default ElasticEngine;