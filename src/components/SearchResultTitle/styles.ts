import styled from "styled-components";
import { blue } from "../../styles/constants";
import Container from "../Container";

const Wrapper = styled(Container)`
  width: fit-content;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  color: ${blue};
`;

export default Wrapper;
