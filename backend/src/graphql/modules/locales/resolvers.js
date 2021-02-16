const locales = require('./locales.json')

module.exports = {
    Query: {
        locales: () => locales,
        locale: (_, { id }) => locales.find(l => l.id === id),
    }
}