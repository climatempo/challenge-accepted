const express = require('express')
const mongoose = require('./database/mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
app.use(cors());
app.use('/', require('./routes'));

module.exports = app