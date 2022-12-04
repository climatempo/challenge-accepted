import express, { Request, response, Response } from 'express';
import cors from 'cors';
import EventEmitter from 'events';
import { handler } from './index';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

EventEmitter.defaultMaxListeners = 100;

const app = express();

app.use(express.json());
app.use(cors());

const parseRequest = (request: Request): APIGatewayEvent => {
  return {
    httpMethod: request.method,
    path: request.path,
    pathParameters: request.params,
    queryStringParameters: request.query
  } as unknown as APIGatewayEvent;
}

const parseResponse = (response: Response, handler: Promise<APIGatewayProxyResult>): void => {
  handler.then(data => response.json(JSON.parse(data.body)));
}

app.get('*',
  (request, response) => parseResponse(response, handler(parseRequest(request)))
);

app.listen(process.env.PORT || 5000);

console.log(`Service available on port ${process.env.PORT || 5000}`);
