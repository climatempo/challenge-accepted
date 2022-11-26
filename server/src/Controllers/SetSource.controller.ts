import { Request, Response } from 'express';

function SetSourceController(request: Request, response: Response) {
    return response.json("setSource");
}

export default SetSourceController;