import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100vw;
  background-color: var(--header-background);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const Logo = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;
