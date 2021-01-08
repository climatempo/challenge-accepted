import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import AppError from './AppError';

const errorHandler: ErrorRequestHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
      keyError: error.keyError,
    });
  }

  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
