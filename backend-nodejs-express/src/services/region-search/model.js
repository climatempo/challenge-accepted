import path from 'path';

let LOCALES = [];

try {
  LOCALES = require(path.resolve(`${__dirname}/../../../../base/locales.json`));
} catch (err) {
  global.console.error(err);
}

export const getAllLocales = async () => {
  return Promise.resolve(LOCALES);
};

export const getLocalesByName = async (name) => {
  return Promise.resolve(LOCALES.filter(locale => locale.name.match(new RegExp(name, 'gi'))));
};
