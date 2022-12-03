import { Request, Response, Router } from 'express';
import { getWeatherByLocale } from '../infra';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
   res.send('API alive');
});

router.post('/locale', (req: Request, res: Response) => {
   try {
      const { city } = req.body;

      if (!city) {
         return res
            .status(500)
            .send('É necessário informar a cidade para obter a previsão!');
      }

      const data = getWeatherByLocale(city);

      res.send(data);
   } catch (error) {
      console.log(error);
   }
});
