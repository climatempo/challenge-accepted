import 'antd/dist/antd.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';

import client from './services/api';

import Routes from './routes';

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
