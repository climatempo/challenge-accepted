import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-white.png";
import iconClimate from "../assets/iconClimate.png";

function Login() {
  return (
    <Container>
      <PaperLogo>
        <IconLogo src={logo} alt="logo" />
        <Img src={iconClimate} />
      </PaperLogo>
      <ContainerForm>
        <Title>LOGIN</Title>
        <InputName placeholder="Digite seu nome..." />
        <Button>Entrar</Button>
      </ContainerForm>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const PaperLogo = styled.div`
  width: 50%;
  height: 100vh;
  background: #04a1cc;
  border-radius: 0px 50px 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconLogo = styled.img`
  width: 272px;
`;

const Img = styled.img`
  width: 254px;
  height: 252px;
  margin-top: 15px;
`;

const ContainerForm = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #04a1cc;
`;

const InputName = styled.input`
  width: 350px;
  height: 50px;
  padding: 0px 15px;
  background: #ffffff;
  border: 1px solid #047ab2;
  border-radius: 10px;
  outline: none;
  font-size: 24px;
  color: gray;
  font-family: "Roboto", sans-serif;
`;

const Button = styled.button`
  width: 380px;
  height: 50px;
  margin-top: 20px;
  background: #047ab2;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  cursor: pointer;

  :hover {
    background: #04a1cc;
  }
`;

export default Login;
