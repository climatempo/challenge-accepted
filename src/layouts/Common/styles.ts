import styled from 'styled-components';
import Container from '../../components/Container';

const Wrapper = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ChildrenWrapper = styled(Container)`
  width: min(100%, 1140px);
  padding: 20px;
  height: 100%;
`;

export default Wrapper;
