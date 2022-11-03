import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo-white.png";
import iconClimate from "../assets/iconClimate.png";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";

function Login() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function click() {
    if (name.length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      navigate("/Home");
      setName("");
    }
  }

  return (
    <Container>
      <PaperLogo>
        <IconLogo src={logo} alt="logo" />
        <Img src={iconClimate} />
      </PaperLogo>
      <ContainerForm>
        <Title>LOGIN</Title>
        <InputName
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome..."
        />
        <Button onClick={() => click()}>Entrar</Button>
      </ContainerForm>
      {error && (
        <Modal
          exit={() => setError(false)}
          text="Preencha seu 'nome' para efetuar o Login."
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 888px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
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

  @media (max-width: 888px) {
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 50px 50px;
  }
`;

const IconLogo = styled.img`
  width: 272px;

  @media (max-width: 888px) {
    width: 152px;
  }
`;

const Img = styled.img`
  width: 254px;
  height: 252px;
  margin-top: 15px;

  @media (max-width: 888px) {
    width: 134px;
    height: 132px;
    margin-top: 15px;
  }
`;

const ContainerForm = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 888px) {
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #04a1cc;

  @media (max-width: 888px) {
    font-size: 30px;
  }
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
  @media (max-width: 888px) {
    width: 280px;
    height: 50px;
    font-size: 18px;
  }
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

  @media (max-width: 888px) {
    width: 310px;
    height: 50px;
    font-size: 18px;
  }
`;

export default Login;
