import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index';

const app = express();

const configureExpress = () => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use('/', routes);
    return app;
}

export default configureExpress;