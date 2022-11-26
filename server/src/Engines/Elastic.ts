import { Client } from '@elastic/elasticsearch';
import fs from 'fs';

class ElasticEngine {
    static elastic = new Client({
        node: 'https://localhost:9200',
        auth: {
            username: 'elastic',
            password: process.env.ES_PASSWORD ? process.env.ES_PASSWORD : ''
        },
        tls: {
            ca: fs.readFileSync('./dockerca.crt'),
            rejectUnauthorized: false
        }
    });
}

export default ElasticEngine;