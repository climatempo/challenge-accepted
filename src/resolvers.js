const Locale = require('./models/Locale');

module.exports = {
  Query: {
    locales: () => Locale.findAll(),
  },

  Mutation: {
    createLocale: (_, { id, name, state, latitude, longitude }) =>
      Locale.create({ id, name, state, latitude, longitude }),
  },
};
