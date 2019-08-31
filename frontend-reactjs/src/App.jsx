import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Weather from './containers/Weather';
import Header from './components/Header';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Weather} />
    </Switch>
  </BrowserRouter>
);

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e0e0e0;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Router />
      </Content>
    </Container>
  );
}
