import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  & .logo {
    width: 150px;
  }
  & .search {
    width: 30px;
  }
`;
