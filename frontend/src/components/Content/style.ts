import styled from "styled-components";

export const ContentWrapper = styled.main`
  padding: 30px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1000px) {
    max-width: calc(100% - 200px);
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const ResponseDisplay = styled.h3`
  max-width: 400px;
  width: 100%;
  color: #000;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;

  &:only-child {
    margin: 50px auto;
  }

  @media (min-width: 1000px) {
    text-align: center;
    max-width: unset;
    margin-bottom: 50px;
  }
`;
