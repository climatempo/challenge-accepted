import path from 'path';

export const getAllLocales = async () => {
  let locales = [];
  try {
    locales = require(path.resolve(`${__dirname}/../../../../base/locales.json`));
  } catch (err) {
    global.console.error(err);
  }
  return Promise.resolve(locales);
};

export const getLocalesByName = async (name) => {
  let locales = [];
  try {
    locales = require(path.resolve(`${__dirname}/../../../../base/locales.json`));
  } catch (err) {
    global.console.error(err);
  }
  return Promise.resolve(locales.filter(locale => locale.name.match(new RegExp(name, 'gi'))));
};
