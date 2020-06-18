import React from 'react';

import { Container } from './styles';

import logo from '../../images/logo-white.png';
import search from '../../images/icons/search.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img className="logo" src={logo} alt="climatempo logo" />
      <img className="search" src={search} alt="climatempo logo" />
    </Container>
  );
};

export default Header;
