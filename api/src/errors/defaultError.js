const { serializeError } = require('serialize-error');

const { isProduction } = require('../utils/env');

const getRequestPath = req => {
  return req.path;
};

const getErrorMessage = err => {
  const serializedError = serializeError(err);

  if (isProduction()) {
    return (serializedError && serializedError.message) || serializedError;
  }

  return serializedError;
};

/**
 * Create a standardized response for error
 * https://www.baeldung.com/rest-api-error-handling-best-practices
 */
class DefaultError {
  constructor(status, errName, errObj, req) {
    this.status = status;
    this.errorName = errName;
    this.message = getErrorMessage(errObj);
    this.requestPath = req ? getRequestPath(req) : '';
    this.timestamp = Date.now();
  }

  static badRequest(req, err) {
    return new this(400, 'Bad request', err, req);
  }

  static unProcessableEntity(req, err) {
    return new this(422, 'Unprocessable entity', err, req);
  }

  static unAuthorized(req, err) {
    return new this(401, 'Unauthorized', err, req);
  }

  static forbidden(req, err) {
    return new this(403, 'Forbidden', err, req);
  }

  static notFound(req, err) {
    return new this(404, 'Not Found', err, req);
  }

  static internalServerError(req, err) {
    return new this(500, 'Internal Server Error', err, req);
  }

  toJSON() {
    return {
      status: this.status,
      error: this.errorName,
      message: this.message,
      path: this.requestPath,
      timestamp: this.timestamp,
    };
  }
}

module.exports = DefaultError;
