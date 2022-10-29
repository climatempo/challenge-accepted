import styled from 'styled-components';
import Container from '../Container';
import ImageCP from '../Image';
import ButtonCP from '../Button';

interface TempConfigButtonProps {
  isActive?: boolean;
}

const Wrapper = styled(Container)`
  position: relative;
`;

export const Image = styled(ImageCP)`
  width: 2.4rem;
`;

export const Dropdown = styled(Container)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  background: white;
  padding: 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  top: 32px;
  right: 0;
`;

export const Button = styled(ButtonCP)`
  &:hover {
    opacity: 0.8;
  }
`;

export const ConfigButtonsWrapper = styled(Container)`
  display: flex;
  gap: 0.6rem;
`;

export const ConfigButton = styled.button<TempConfigButtonProps>`
  background: ${({ isActive }) => isActive ? '#344879' : 'white'};
  color: ${({ isActive }) => isActive ? 'white' : '#344879'};
  border: solid 0.2rem #344879;
  border-radius: 1rem;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  gap: 1.2rem;
`;

export const Title = styled.h6`
  font-size: 1.4rem;
`;

export const CloseButton = styled(ButtonCP)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.6rem;
`;

export const CloseImage = styled(ImageCP)`
  width: 1.6rem;
`;

export default Wrapper;
