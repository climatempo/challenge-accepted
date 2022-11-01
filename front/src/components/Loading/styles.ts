import styled from 'styled-components';
import { blue } from '../../styles/constants';
import Container from '../Container';

const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Spinner = styled(Container)`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 5px solid ${blue};
  border-top-color: transparent;
  animation: spin 1s linear infinite;
`;

export default Wrapper;
