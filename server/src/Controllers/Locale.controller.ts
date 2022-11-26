import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempo.engine';

function LocaleController(request: Request<{ id: number }>, response: Response) {
    const id = request.params.id > 0 ? request.params.id : 0;

    if(!id)
        return response.sendStatus(400);

    new ClimaTempoEngine().cityInfoById(id)
        .then(locale => response.json(locale))
        .catch((e) => {
            console.error(e);
            response.sendStatus(404);
        });
}

export default LocaleController;