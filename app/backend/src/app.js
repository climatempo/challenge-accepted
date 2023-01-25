const express = require('express');
const cors = require('cors');

const app = express();

// for preventing cors errors when fetching it in the frontend
app.options('*', cors());
app.use(cors());
app.use(express.json());

module.exports = app;
