import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { blue } from '../../styles/constants';
import Container from '../Container';
import Image from '../Image';

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 1rem;
  color: ${blue};
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
`;

export default Wrapper;
