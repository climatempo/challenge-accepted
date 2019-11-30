import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Locale from './locale';
import Weather from './weather';

const App = (port) => {
  const _app = express();
  _app.use(cors());
  _app.use(bodyParser.json());

  Locale(_app);
  Weather(_app);

  _app.listen(port, () => console.log(`Listening on port: ${port}.`));
};

new App(process.env.PORT || 3030);
