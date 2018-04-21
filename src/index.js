import express from 'express';
import path from 'path';
import routes from './routes';

const app = new express();
routes(app);

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.port || '8080';

app.listen(port, () => {
  console.log(`LISTEN IN PORT ${port}`);
});
