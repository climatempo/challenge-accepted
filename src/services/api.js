import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://backend-db-tic-tac-toe.herokuapp.com'
    : 'http://localhost:4000';

export default new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
