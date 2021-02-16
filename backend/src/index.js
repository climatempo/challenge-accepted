const startServer = require('./server')
const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers')

startServer({ typeDefs, resolvers })