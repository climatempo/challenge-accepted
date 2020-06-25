import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .logo {
    width: 150px;
    margin-right: 20px;
  }
  & .search {
    display: flex;
    align-items: center;
  }
  & .search-image {
    width: 22px;
  }
`;

export const InputWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #82b0fd;
  border-radius: 15px;
  padding: 5px 10px 5px 0;
  input {
    width: 100%;
    border: none;
    color: #fff;
    background-color: transparent;
    padding: 0 15px;
  }
`;
