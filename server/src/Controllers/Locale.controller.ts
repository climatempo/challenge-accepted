import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempoEngine';

function LocaleController(request: Request<{ id: number }>, response: Response) {
    const id = request.params.id > 0 ? request.params.id : 8600;

    new ClimaTempoEngine().cityInfoById(id)
        .then(locale => response.json(locale));
}

export default LocaleController;