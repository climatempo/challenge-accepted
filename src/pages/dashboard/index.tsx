import React from 'react';
import Header from '../../components/header';
import CurrentDay from '../../components/currentDay';
import NextDaysList from '../../components/nextDaysList';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <div className="header">
          <span>Osasco/SP</span>
          <span>Seg, 16 Jul</span>
        </div>
        <CurrentDay />
        <NextDaysList />
      </Content>
    </Container>
  );
};

export default Dashboard;
