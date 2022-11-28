import express from 'express';
import cors from 'cors';
import routes from './Routes/root.route';
import Indexer from './Indexer/Indexer.indexer';
import EventEmitter from 'events';

EventEmitter.defaultMaxListeners = 100;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


console.log('Waiting 12s for Elastic to load...');
setTimeout(() => {
    app.listen(process.env.PORT || 4000);

    new Indexer().execute();
    console.log(`Service available on port ${process.env.PORT || 4000}`);
}, 12000);
