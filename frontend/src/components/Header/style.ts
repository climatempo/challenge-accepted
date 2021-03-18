import styled from "styled-components";
import IconImage from "../../assets/images/logo-white.png";

export const Wrapper = styled.header`
  width: 100vw;
  height: 70px;
  background-color: #1565c0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img.attrs({
  src: IconImage,
})`
  width: 150px;
`;
