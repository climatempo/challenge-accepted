import React from 'react';
import Header from '../../components/header';
import CurrentDay from '../../components/currentDay';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CurrentDay />
      </Content>
    </Container>
  );
};

export default Dashboard;
