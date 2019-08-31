import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  justify-content: center;
  align-items: center;
  height: 55px;
  background-color: #1665c0;
`;

export default () => (
  <Header>
    <img
      src={`${window.location.origin}/images/logo-white.png`}
      alt=""
      style={{ height: '18px' }}
    />
  </Header>
);
