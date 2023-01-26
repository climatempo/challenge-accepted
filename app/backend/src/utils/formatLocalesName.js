const removeAccents = require('./removeAccents');

// this function allows the application get more results if someone write any locale with a wrong name, wrong spaces, or even wrong accents, getting a bigger amount of right results

const formatLocalesName = (localeName) => {
  const formatedLocaleName = removeAccents(localeName.toLowerCase());
  const formatedLocaleNameWithoutSpaces = formatedLocaleName.replace(/\s/g, '');
  return formatedLocaleNameWithoutSpaces;
};

module.exports = formatLocalesName;
