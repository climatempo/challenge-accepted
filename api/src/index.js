require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const { isTest, isProduction } = require('./utils/env');

const app = express();

app.use(helmet());

const corsOptions = {
  origin: isProduction() ? process.env.FRONTEND_URL : '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

const morganFormat = isProduction() ? 'combined' : 'dev';

if (!isTest()) {
  app.use(morgan(morganFormat));
}

app.use(express.json());

const weatherRoutes = require('./routes/weatherRoutes');

app.use('/weather', weatherRoutes);

app.use(require('./errors/handler'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
