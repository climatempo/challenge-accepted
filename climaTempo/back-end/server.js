const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

const fs = require('fs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routes = require('./src/routes/routes.js')(app, fs);

const server = app.listen(3333, () => {
    console.log('listening on port %s...', server.address().port);
  });

  module.exports = app;  