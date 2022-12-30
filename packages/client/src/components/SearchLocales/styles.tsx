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

  padding: 2rem;
  border-bottom: 2px solid var(--gray-300);

  transition: ${({ transitionMs = 400 }) => transitionMs}ms;
`;
