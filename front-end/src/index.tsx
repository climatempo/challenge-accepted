import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme/theme';
import { PreferencesProvider } from './providers/preferences';

export const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
    <PreferencesProvider>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <App />
        </ ChakraProvider>
      </ ApolloProvider>
    </PreferencesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

