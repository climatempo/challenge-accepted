import { Request, Response, Router } from 'express';
import { getCityWeather } from '../infra';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
   res.send('API alive');
});

router.get('/weather/:city', (req: Request, res: Response) => {
   try {
      const { city } = req.params;

      if (!city) {
         res.status(500).send(
            'É necessário informar a cidade para obter a previsão!'
         );
      }

      const data = getCityWeather(city);

      res.send(data);
   } catch (error) {
      console.log(error);
   }
});
