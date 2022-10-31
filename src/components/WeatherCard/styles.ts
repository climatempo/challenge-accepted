import styled from "styled-components";
import { gray } from "../../styles/constants";
import Image from "../Image";
import Span from "../Span";

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: min(100%, 30rem);
  box-shadow: 0 1rem 1rem 0.2rem rgba(0, 0, 0, 0.2);
  margin: 2rem;
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;
`;

export const Date = styled.h3`
  font-size: 1.6rem;
`;

export const Text = styled(Span)`
  font-size: 1.4rem;
`;

export const CardBody = styled.ul`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 6rem;
  padding: 3rem 6rem;
  background: #e3e3e3;
`;

export const BodyItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled(Image)`
  width: 2rem;
`;

export const ItemText = styled(Span)`
  font-size: 1.4rem;
`;

export default Wrapper;
