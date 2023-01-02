import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

interface ContainerProps {
  rootPage: boolean;
  transitionMs?: number;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  flex: ${({ rootPage }) => (rootPage ? 0 : 1)};

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: ${({ transitionMs = 400 }) => transitionMs}ms;
`;
