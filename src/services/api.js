import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = 'http://35.199.81.230';

export default new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
