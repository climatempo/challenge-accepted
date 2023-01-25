const LocalesServices = require('../Services/localesServices');
const statusCodes = require('../statusCodes');

const localeVerifierMiddleware = async ({ params, query }, res, next) => {
  const localesServices = new LocalesServices();

  if (query.locale || params.name) {
    const localeByName = await localesServices.getLocaleByName(
      params.name || query.locale
    );

    if (!localeByName) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: 'This locale does not exists :(' });
    }
  }

  next();
};

module.exports = localeVerifierMiddleware;
