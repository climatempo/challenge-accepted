import { Request, Response } from 'express';

function SourceController(request: Request, response: Response) {
    return response.json("Source");
}

export default SourceController;