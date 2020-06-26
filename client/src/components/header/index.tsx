import React, { useState, useCallback } from 'react';

import { Container, InputWrapper } from './styles';

import logo from '../../images/logo-white.png';
import search from '../../images/icons/search.svg';

interface HeaderProps {
  handleSearch(data: string): void;
}

const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    if (!searchValue) return false;
    handleSearch(searchValue);
  }, [handleSearch, searchValue])

  return (
    <Container>
      <img className="logo" src={logo} alt="climatempo logo" />
      <form onSubmit={handleSubmit} className="search">
        <InputWrapper>
          <input value={searchValue} onChange={event => setSearchValue(event.target.value)} />
          <img onClick={handleSubmit} className="search-image" src={search} alt="climatempo logo" />
        </InputWrapper>
      </form>
    </Container>
  );
};

export default Header;
