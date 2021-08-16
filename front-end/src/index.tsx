import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme/theme';
import { PreferencesProvider } from './providers/preferences';

const API_HOST = process.env.NODE_ENV === 'production' ? 'api' : 'localhost' || 'localhost'
console.log(API_HOST, process.env.NODE_ENV)

/**
 * Criação do apollo client que se conecta a nossa API Graph Ql
 * Está configurada para realizar o armazena de cache em memória
 */
export const client = new ApolloClient({
  uri: `http://${API_HOST}:3001/graphql`,
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

