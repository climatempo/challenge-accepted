import React from 'react';

import { Container } from './styles';

import logo from '../../images/logo-white.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="climatempo logo" />
    </Container>
  );
};

export default Header;
