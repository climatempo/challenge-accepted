import styled from 'styled-components';
import Button from '../Button';
import Container from '../Container';
import Image from '../Image';

const Wrapper = styled(Container)`
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 40rem);
  border: 1px solid black;
  border-radius: 20px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 20px 0 0 20px;
`;

export const SearchButton = styled(Button)`
  width: 2.4rem;
  height: 2.4rem;
  margin: 10px;
`;

export const SearchIcon = styled(Image)`
  width: 100%;
`;

export default Wrapper;
