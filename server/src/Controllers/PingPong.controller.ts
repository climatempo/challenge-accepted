import { Request, Response } from 'express';

function PingPongController(request: Request, response: Response) {
    return response.json("pong");
}

export default PingPongController;