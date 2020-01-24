const DefaultError = require('./defaultError');

const handler = (err, req, res, next) => {
  // Check if is an instance of default error or return an 500 error
  const errorInstance =
    err instanceof DefaultError
      ? err
      : DefaultError.internalServerError(req, err);

  res.status(errorInstance.status);
  res.json(errorInstance);
};

module.exports = handler;
