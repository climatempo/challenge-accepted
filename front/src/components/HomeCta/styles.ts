import styled from 'styled-components';
import Container from '../Container';
import Image from '../Image';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: min(40rem, 100%);
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  text-align: center;
`;

export const Logo = styled(Image)`
  width: 100%;
`;

export default Wrapper;
