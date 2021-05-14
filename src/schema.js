const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    locales: [Locale!]
  }

  type Locale {
    id: ID!
    name: String!
    state: String!
    latitude: Float!
    longitude: Float!
  }
`;

module.exports = typeDefs;
