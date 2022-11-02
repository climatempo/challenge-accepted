import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header/Header";
import imgClimate from "../assets/weather.png";
import iconSearch from "../assets/icons/search.png";
import iconLocation from "../assets/icons/location.svg";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Circle
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Circle
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function Home() {
  const [options, setOptions] = useState([]);
  const [climate, setClimate] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [card, setCard] = useState(false);
  const navigate = useNavigate();

  function clickExit() {
    navigate("/");
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    const load = async () => {
      const response = await axios.get("./locales.json");
      //console.log(response.data);
      setOptions(response.data);
    };
    load();
  }, []);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
    setCard(true);
    const loadData = async () => {
      const response = await axios.get("./weather.json");
      const dataClimate = response.data;
      const filterArray = dataClimate.filter(function (obj) {
        return obj.locale.name === text;
      });
      setClimate(filterArray[0].weather);
    };
    loadData();
  };

  const onChangeHandle = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = options.filter((item) => {
        const regex = new RegExp(`${text}`, "gi");
        return item.name.match(regex);
      });
    }
    //console.log("matches", matches);
    setSuggestions(matches);
    setText(text);
  };

  return (
    <Container>
      <Header exit={() => clickExit()} />
      <Body>
        <Search>
          <Img src={imgClimate} alt="ImgClimate" />
          <TitleSearch>Informe a localidade</TitleSearch>
          <InputSearch
            value={text}
            onChange={(e) => onChangeHandle(e.target.value)}
            maxLength={23}
            type="text"
            placeholder="Localidade..."
          />
          {!!suggestions.length && (
            <Paper>
              <TextPaper>Você está buscando por...</TextPaper>
              {suggestions.map((suggestions, i) => (
                <ContainerSuggestions
                  onClick={() => onSuggestHandler(suggestions.name)}
                  key={i}
                >
                  <Suggestions>{suggestions.name}</Suggestions>
                  <IconSugestions src={iconLocation} alt="location" />
                </ContainerSuggestions>
              ))}
            </Paper>
          )}
        </Search>
        <ContainerCards>
          <TitleClimate>Previsão</TitleClimate>
          <BodyCards>
            {!!climate.length && (
              <Slider {...settings}>
                {climate.map((clima, id) => (
                  <div key={id}>
                    <Card
                      date={clima.date}
                      text={clima.text}
                      temperaturaMin={clima.temperature.min}
                      temperaturaMax={clima.temperature.max}
                      probability={clima.rain.probability}
                      precipitation={clima.rain.precipitation}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </BodyCards>
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
  align-items: center;
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

const Paper = styled.div`
  width: 350px;
  height: 130px;
  position: absolute;
  top: 71%;
  display: flex
  flex-direction: column;
  background-color: rgba(4, 161, 204, 0.3);
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
`;

const TextPaper = styled.p`
  margin-top: -2px;
  margin-bottom: -2px;
  height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #000000;
  border-bottom: 1px solid #ffffff;
`;

const ContainerSuggestions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 40px;
  border-bottom: 1px solid #ffffff;

  :hover {
    background: rgba(4, 161, 204, 0.2);
  }
  cursor: pointer;
`;

const Suggestions = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 48px;
  color: #04a1cc;
  cursor: pointer;
`;

const IconSugestions = styled.img`
  width: 30px;
  height: 30px;
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
  margin-top: 11%;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #047ab2;
`;

const BodyCards = styled.div`
  width: 55%;
  height: 100%;
  margin-top: 2%;
  align-items: center;
`;

const Circle = styled.div`
  border-radius: 100%;
`;

export default Home;
