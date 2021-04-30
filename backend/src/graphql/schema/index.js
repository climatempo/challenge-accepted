const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Location {
  _id: ID!
  name: String!
  state: String!
  latitude: Float!
  longitude: Float!
}

type Period {
  begin: String!
  end: String!
}

type Temperature {
  min: Int!
  max: Int!
}

type Rain {
  probability: Int!
  precipitation: Int!
}

type WeatherData {
  date: String!
  text: String!
  temperature: Temperature
  rain: Rain
}

type Weather {
  _id: ID!
  period: Period
  localeId: String!
  weather: [WeatherData] 
}

input LocationInput {
  name: String!
  state: String!
  latitude: Float!
  longitude: Float!
}

input PeriodInput {
  begin: String!
  end: String!
}

input TemperatureInput {
  min: Int!
  max: Int!
}

input RainInput {
  probability: Int!
  precipitation: Int!
}

input WeatherDataInput {
  date: String!
  text: String!
  temperature: TemperatureInput
  rain: RainInput
}

input WeatherInput {
  period: PeriodInput
  localeId: String!
  weather: [WeatherDataInput!] 
}

type RootQuery {
  locations: [Location!]!
  weather: [Weather!]!
}

type RootMutation {
  createLocation(locationInput: LocationInput): Location
  createWeather(weatherInput: WeatherInput): Weather
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
