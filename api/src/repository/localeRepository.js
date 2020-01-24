const { readFile, parseFile } = require('./base');

let locales = null;

const getLocales = async () => {
  if (locales) {
    return locales;
  }

  const content = await readFile('locales.json');
  locales = parseFile(content);

  return locales;
};

const findLocaleByName = name => {
  return getLocales().then(localesData => {
    return localesData.find(
      locale => locale.name.toLowerCase() === name.toLowerCase()
    );
  });
};

module.exports = {
  findLocaleByName,
};
