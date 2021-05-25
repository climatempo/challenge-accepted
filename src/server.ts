import express from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors());
app.use(routes);



app.listen(3333, () => console.log('Rodando'));