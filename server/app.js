import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index';

const app = express();

const configureExpress = () => {
    // view engine setup
    app.set('views', path.join(__dirname, '..', 'client', 'views'));
    app.set('view engine', 'ejs');

    app.use(cors());
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

    // routes setup
    app.use('/', routes);

    app.use((err, req, res, next) => res.render('error'));

    return app;
}

export default configureExpress;