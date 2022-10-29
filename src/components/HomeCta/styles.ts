import styled from 'styled-components';
import Container from '../Container';
import Image from '../Image';

const Wrapper = styled(Container)`
  width: min(40rem, 100%);
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
`;

export const Logo = styled(Image)`
  
`;

export default Wrapper;
