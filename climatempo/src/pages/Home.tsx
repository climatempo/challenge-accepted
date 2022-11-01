import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import imgClimate from "../assets/weather.png";
import iconSearch from "../assets/icons/search.png";

function Home() {
  //const [local, setLocal] = useState("");

  return (
    <Container>
      <Header />
      <Body>
        <Search>
          <Img src={imgClimate} alt="ImgClimate" />
          <TitleSearch>Informe a localidade</TitleSearch>
          <InputSearch maxLength={23} type="text" placeholder="Localidade..." />
        </Search>
        <ContainerCards>
          <TitleClimate>Previsão</TitleClimate>
        </ContainerCards>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Search = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerCards = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Img = styled.img`
  width: 171px;
  height: 172px;
`;

const InputSearch = styled.input`
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
  background-image: url(${iconSearch});
  background-repeat: no-repeat;
  background-position: 95%;
`;

const TitleSearch = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #047ab2;
`;

const TitleClimate = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #047ab2;
`;

export default Home;
