import { Request, Response, Router } from 'express';
import { getSuggestionsLocale, getWeatherByLocale } from '../infra';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
   res.send('API alive');
});

router.get('/locale', (req: Request, res: Response) => {
   try {
      const { search } = req.query;

      if (!search) {
         return res
            .status(500)
            .send(
               'É necessário informar uma palavra para realizar a pesquisa!'
            );
      }

      const data = getSuggestionsLocale(search.toString());

      res.send(data);
   } catch (error) {
      console.log(error);
   }
});

router.get('/weather', (req: Request, res: Response) => {
   try {
      const { city } = req.query;

      if (!city) {
         return res
            .status(500)
            .send('É necessário informar a cidade para obter a previsão!');
      }

      const data = getWeatherByLocale(city.toString());

      res.send(data);
   } catch (error) {
      console.log(error);
   }
});
