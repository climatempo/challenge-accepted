const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(cors())
    }

    routes() {
        this.express.use(routes);
    }
}

module.exports = new AppController().express;