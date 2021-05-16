const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    locales: [Locale!]
    weather(localeID: Int!): Prediction
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

  type Prediction {
    period: Period
    locale: Locale
    weather: [Weather]
  }

  type Temperature {
    min: Float!
    max: Float!
  }

  type Rain {
    probability: Float!
    precipitation: Float!
  }

  type Period {
    begin: String!
    end: String!
  }

  type Weather {
    date: String!
    text: String!
    temperature: Temperature
    rain: Rain
  }
`;

module.exports = typeDefs;
