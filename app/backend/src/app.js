const express = require('express');
const cors = require('cors');

const app = express();

// for preventing cors errors when fetching it in the frontend
app.options('*', cors());
app.use(cors());
app.use(express.json());

const localesRoutes = require('./Routes/locales.routes');
const weathersRoutes = require('./Routes/weathers.routes');

const jwtVerifier = require('./Middlewares/jwtVerifier');
const JWTGenerator = require('./utils/JWTGenerator');

// 'Hello world' from the api and gives the token to user be able to use the api
app.get('/', (_req, res) =>
  res.status(200).json({
    message:
      "Climatempo says hello :), and here's your token for using the api",
    token: JWTGenerator(),
  })
);

// all the requests below needs a JWT 'authorization' headers key
// example: { headers: { authorization: secret_example } }
app.use(jwtVerifier);

app.use('/locales', localesRoutes);
app.use('/weathers', weathersRoutes);

module.exports = app;
