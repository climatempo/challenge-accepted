import React from 'react';

import { Container, InputWrapper } from './styles';

import logo from '../../images/logo-white.png';
import search from '../../images/icons/search.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img className="logo" src={logo} alt="climatempo logo" />
      <form className="search">
        <InputWrapper>
          <input  />
          <img className="search-image" src={search} alt="climatempo logo" />
        </InputWrapper>
      </form>
    </Container>
  );
};

export default Header;
 