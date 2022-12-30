import styled from "styled-components"

export const Card = styled.div`
  width: 20rem;
  height: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;
  border-radius: 0.4rem;
  border: 1px solid var(--gray-400);
  background-color: var(--white);

  @media (max-width: 719px) {
    width: 100%;
  }
`;

export const TemperatureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const TemperatureBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;