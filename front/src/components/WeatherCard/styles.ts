import styled from "styled-components";
import Container from "../Container";
import Image from "../Image";
import Span from "../Span";
import { StyledProps } from "./types";

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: min(100%, 30rem);
  box-shadow: 0 1rem 1rem 0.2rem rgba(0, 0, 0, 0.2);
  margin: 2rem;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 20px;
`;

export const Date = styled.h3`
  font-size: 1.6rem;
`;

export const Text = styled(Span)`
  font-size: 1.4rem;
`;

export const CardBodyWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  background: #e3e3e3;
`;

export const CardBody = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 20px 40px;
`;

export const BodyItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
`;

export const Icon = styled(Image)`
  width: 2rem;
`;

export const ItemText = styled(Span)<StyledProps>`
  font-size: 2rem;
  color: ${({ color }) => (color ? color : null)};
`;

export default Wrapper;
