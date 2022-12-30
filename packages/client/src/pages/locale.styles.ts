import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: scroll;
  padding: 1rem;
  gap: 1rem;

  transition: 1s;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 65rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;
