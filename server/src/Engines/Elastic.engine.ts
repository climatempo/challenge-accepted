import { Client } from '@elastic/elasticsearch';
import { readFileSync } from 'fs';

class ElasticEngine {
    private static elastic: Client;

    client = ElasticEngine.elastic ? ElasticEngine.elastic : ElasticEngine.elastic = new Client({
        node: 'https://localhost:9200',
        auth: {
            username: 'elastic',
            password: process.env.ES_PASSWORD ? process.env.ES_PASSWORD : ''
        },
        tls: {
            ca: this.elasticCA(),
            rejectUnauthorized: false
        }
    });

    private elasticCA() {
        try {
            return readFileSync('./dockerca.crt');
        }catch(e) {
            console.error(e);
            return new Buffer('');
        }
    }
}

export default ElasticEngine;