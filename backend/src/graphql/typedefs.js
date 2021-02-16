const { fileLoader, mergeTypes } = require('merge-graphql-schemas')
const path = require('path')

const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypes(typesArray)

module.exports = typeDefs