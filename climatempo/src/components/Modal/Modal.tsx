import React from "react";
import styled from "styled-components";
import close from "../../assets/icons/close.svg";

type ModalType = {
  text: string;
  exit: () => void;
};

function Modal({ text, exit }: ModalType) {
  return (
    <Container>
      <Body>
        <Text>{text}</Text>
        <Icon onClick={exit} src={close} alt="close" />
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  background: rgba(0, 0, 0, 0);
  background-size: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;

const Body = styled.div`
  width: 320px;
  height: 80px;
  margin-top: 5%;
  margin-left: 76%;
  border-radius: 10px;
  background-color: #04a1cc;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    background-color: #04a1cc;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default Modal;
