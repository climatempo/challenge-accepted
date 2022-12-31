import { Typography } from "@mui/material";
import styled from "styled-components";

export const Card = styled.div`
  width: 20rem;
  height: 28rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.4rem;
  border: 1px solid var(--gray-400);
  background-color: var(--white);
  overflow: hidden;

  @media (max-width: 719px) {
    height: 30rem;
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 2rem 1rem;
`;

export const CardBody = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1rem 2rem 2rem;
  background-color: var(--gray-100);

  @media (max-width: 719px) {
    gap: 2rem;
  }
`;

export const CardRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem
`;

export const NumberLabel = styled(Typography)`
  color: var(--gray-600);
`;
