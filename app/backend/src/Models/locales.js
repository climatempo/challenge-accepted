const { jsonContent } = require('../utils/readJsonFiles');

const getAllLocales = async () => {
  const allLocales = await jsonContent('locales');
  return allLocales;
};

module.exports = getAllLocales;
