import { Request, Response } from 'express';
import ClimaTempoEngine from '../Engines/ClimaTempoEngine';

function WeathersController(request: Request<{ code: number }>, response: Response) {
    const code = request.params.code > 0 ? request.params.code : 3664;

    new ClimaTempoEngine().detailedWeatherCollectionByCityCode(code)
        .then(weather => response.json(weather));
}

export default WeathersController;