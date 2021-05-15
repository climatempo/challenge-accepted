const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    locales: [Locale!]
  }

  type Mutation {
    createLocale(
      id: Int!
      name: String!
      state: String!
      latitude: Float!
      longitude: Float!
    ): Locale
  }

  type Locale {
    id: Int!
    name: String!
    state: String!
    latitude: Float!
    longitude: Float!
  }
`;

module.exports = typeDefs;
