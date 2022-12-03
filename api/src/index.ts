import cors from 'cors';
import express from 'express';
import { router } from './application';

export const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
