import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1565c0;
  width: 100vw;
  padding: 12px;

  img {
    height: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  width: 100vw;
  padding: 0 16px;
  margin-bottom: 16px;

  input {
    border: none;
    font-size: 24px;
    color: gray;
    width: 100%;
  }

  button {
    border: none;
    background-color: white;
    padding: 8px;
  }
`;

export const LocaleTitle = styled.p`
  padding: 0 16px;
  font-size: 24px;
`;
