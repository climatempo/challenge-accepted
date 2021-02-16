const { fileLoader, mergeResolvers } = require('merge-graphql-schemas')
const path = require('path')

const resolversArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'))
const resolvers = mergeResolvers(resolversArray)

module.exports = resolvers