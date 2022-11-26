import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempoEngine';

function InstantController(request: Request<{ id: number }>, response: Response) {
    const id = request.params.id > 0 ? request.params.id : 8600;

    new ClimaTempoEngine().weatherByCityId(id)
        .then(weather => response.json(weather));
}

export default InstantController;