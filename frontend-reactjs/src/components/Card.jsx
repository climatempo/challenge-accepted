import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 5px 5px 1px rgba(0, 0, 0, .1);
  min-height: 200px;
  background-color: #eee;
  margin: 10px 0;
`;

const Card = ({ children }) => (
  <Container>{children}</Container>
);

Card.propTypes = {
  children: PropTypes.element,
};

export default Card;
