import locales from './locales.json'

export default {
    Query: {
        locales: () => locales,
        locale: (_, { id }) => locales.find(l => l.id === id),
    }
}