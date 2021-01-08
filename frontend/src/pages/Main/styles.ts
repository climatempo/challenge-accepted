import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SearchInput = styled.select`
  height: 48px;
  width: 80%;
  margin: 20px auto;
  display: flex;
  align-self: center;
  border-radius: 4px;
  border-color: var(--light-grey);
  outline: none;
  padding: 0 15px;
`;
