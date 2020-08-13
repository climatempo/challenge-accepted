import { Response } from "express";
import * as HTTPStatus from "http-status";
import { InvalidArgumentError, MissingArgumentError, NotFoundError } from "./errors";

/**
 * Response for Internal Error
 *
 * @export
 * @param {Response} res
 */
export function internalErrorResponse(res: Response, message: string) {
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ errorCode: "ERR-001", message });
}

/**
 * Response for Not found Error
 *
 * @export
 * @param {Response} res
 * @param {string} message
 */
export function notFoundResponse(res: Response, message: string) {
  res.status(HTTPStatus.NOT_FOUND).json({ errorCode: "ERR-002", message });
}

/**
 * Response for invalid argument
 *
 * @export
 * @param {Response} res
 */
export function invalidArgumentResponse(res: Response, message: string) {
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ errorCode: "ERR-003", message });
}

/**
 * Response for missing argument
 *
 * @export
 * @param {Response} res
 */
export function missingArgumentResponse(res: Response, message: string) {
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ errorCode: "ERR-004", message });
}

/**
 * Error handler for responses
 *
 * @export
 * @param {Error} err
 * @param {Response} res
 * @param {string} ObjName
 */
export function responseErrorHandler(err: Error, res: Response) {
  if (err instanceof NotFoundError) {
    notFoundResponse(res, err.message);
  } else if (err instanceof InvalidArgumentError) {
    invalidArgumentResponse(res, err.message);
  } else if (err instanceof MissingArgumentError) {
    missingArgumentResponse(res, err.message);
  } else {
    internalErrorResponse(res, err.message);
  }
}
