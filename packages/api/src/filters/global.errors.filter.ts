import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (process.env.NODE_ENV === 'development')
      console.log(exception, JSON.stringify({ url: request.url }, null, 2));
    const response = ctx.getResponse<Response>();
    let status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message = 'Internal server error';

    if (status !== HttpStatus.INTERNAL_SERVER_ERROR) {
      message =
        (exception as Record<string, any>)?.response?.message ||
        exception.message;
    }

    if (exception.message.includes('already exists')) {
      message = exception.message;
      status = 400;
    }

    if (exception.message.includes('does not exist')) {
      message = exception.message;
      status = 404;
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
