import { Router } from 'express';

const weathersRouter = Router();

weathersRouter.get('/', async (request, response) => {
  return response.json({ message: 'weather get' })
})


export default weathersRouter;