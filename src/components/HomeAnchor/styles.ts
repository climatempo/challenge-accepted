import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "../Image";

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

export const HomeIcon = styled(Image)`
  width: 2.6rem;
`;

export default Wrapper;
