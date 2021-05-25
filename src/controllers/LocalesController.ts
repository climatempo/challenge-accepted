import { Request, Response } from 'express';
import getClient from '../client/elasticsearch';
var locales = require('../../base/locales.json');

class LocalesController {
    
    async findAllElastic(request: Request, response: Response)  {
    
        const data = await getClient().search({
            index: 'elastic_locales',
        });

        return response.json(data);
    }

    async findAll(request: Request, response: Response)  {
    
        return await response.json(locales);
    }
}

export default new LocalesController;