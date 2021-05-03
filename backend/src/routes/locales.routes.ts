import { Router } from 'express';
import CreateLocaleService from '../services/CreateLocaleService';
import GetAllLocalesService from '../services/GetAllLocalesService';

const localesRouter = Router();

localesRouter.get('/', async (request, response) => {
  const getAllLocales = new GetAllLocalesService();

  const locales = await getAllLocales.execute();


  return response.json(locales);
});

localesRouter.post('/', async (request, response) => {
  try {
    const { name, state, latitude, longitude } = request.body;

    const createLocale = new CreateLocaleService();

    const locale = await createLocale.execute({
      name,
      state,
      latitude,
      longitude
    });

    return response.json(locale);
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
});

export default localesRouter;