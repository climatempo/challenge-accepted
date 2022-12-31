import styled from "styled-components";
import { Card as MUICard } from "@mui/material";

interface WrapperProps {
  rootPage: boolean;
  transitionMs?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  flex: ${({ rootPage }) => (rootPage ? 1 : 0)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 2rem;
  border-bottom: 1px solid var(--gray-400);
  background-color: var(--white);

  transition: ${({ transitionMs = 400 }) => transitionMs}ms;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 30rem;
  height: auto;
`;
