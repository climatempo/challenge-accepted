const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.express.use(cors());

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(3001, () =>
      console.log(`API rodando na porta 3001...`)
    );
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }
}
module.exports = new App().express;