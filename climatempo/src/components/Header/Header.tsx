import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo-white.png";

type TypeHeader = {
  exit: () => void;
};

function Header({ exit }: TypeHeader) {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <ButtonExit onClick={exit}>Sair</ButtonExit>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw 100%;
  height: 70px;
  background: #04a1cc;
  border-radius: 0px 0px 50px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
`;

const Logo = styled.img`
  width: 188px;
  height: 28px;

  @media (max-width: 888px) {
    width: 144px;
    height: 18px;
  }
`;

const ButtonExit = styled.button`
  width: 80px;
  height: 30px;
  background: #ffffff;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  /* identical to box height */
  color: #047ab2;

  :hover {
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
  }

  @media (max-width: 888px) {
    width: 70px;
    height: 25px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Header;
