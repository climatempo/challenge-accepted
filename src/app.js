import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index';

const app = express();

const configureExpress = () => {
    // view engine setup
    app.set('views', path.join(__dirname, '..', 'app', 'views'));
    app.set('view engine', 'ejs');

    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname, '..', 'app', 'public')));

    // routes setup
    app.use('/', routes);

    return app;
}

export default configureExpress;