import elasticsearch from 'elasticsearch';

function getClient() {
    const client = new elasticsearch.Client({
        host: 'localhost:9200',
    });

    return client;
}

export default getClient;