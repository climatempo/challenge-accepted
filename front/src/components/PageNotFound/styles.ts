import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { blue } from '../../styles/constants';
import Container from '../Container';
import Span from '../Span';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
  height: fit-content;
`;

export const TextWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: ${blue};
  font-size: 6.4rem;
`;

export const Text = styled(Span)`
  font-size: 2.4rem;
`;

export const Anchor = styled(Link)`
  color: ${blue};
  font-size: 1.8rem;
`;

export default Wrapper;
