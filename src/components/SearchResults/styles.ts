import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Container';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`;

export const Results = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

export const Result = styled.li`
  width: 100%;
`;

export const Anchor = styled(Link)`
  font-size: 1.2rem;
`;

export default Wrapper;
