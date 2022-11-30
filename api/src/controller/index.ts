import { Request, Response, Router } from 'express';
import { getWeatherByCity } from '../lib/axios';

export const router = Router();

router.get('/', async (req: Request, res: Response) => {
   await getWeatherByCity('landon');

   return res.send('rolou');
});
