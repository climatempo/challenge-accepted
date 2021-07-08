import moment from "moment";
import { Container, Date, TempMax, TempMin, Text, Prob } from "./styles";
import chuvaLeveIcon from "../../assets/icons/icons8-chuva-leve.gif";
import tempestadeIcon from "../../assets/icons/icons8-tempestade.gif";
import diaNubladoIcon from "../../assets/icons/icons8-dia-nublado.gif";
import { IoWater, IoUmbrella, IoArrowDown, IoArrowUp } from "react-icons/io5";

const contextWeek = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export function CardWeather(props) {
  const dateHandler = (date) => {
    return contextWeek[moment(date, "YYYY/MM/DD").day()];
  };

  const { date, text, tempMin, tempMax, probabillity, precipitation } = props;
  const isCloudy = text.includes("Períodos de nublado");
  const isRain = text.includes("Chove rápido");
  const isStorm = text.includes("Pancadas de chuva");

  return (
    <Container>
      <Date>
        {dateHandler(date)}
        {isCloudy && <img src={diaNubladoIcon} alt="Icon" />}
        {isRain && <img src={chuvaLeveIcon} alt="Icon" />}
        {isStorm && <img src={tempestadeIcon} alt="Icon" />}
        {!isCloudy && !isRain && !isStorm && (
          <img src={diaNubladoIcon} alt="Icon" />
        )}
      </Date>
      <TempMax>
        {tempMax}Cº
        <span>max</span>
        <IoArrowUp />
      </TempMax>
      <TempMin>
        {tempMin}Cº
        <span>min</span>
        <IoArrowDown />
      </TempMin>
      <Text>{text}</Text>
      <Prob>
        <span>
          <IoUmbrella />
          {probabillity}%
        </span>
        <span>
          <IoWater />
          {precipitation}mm
        </span>
      </Prob>
    </Container>
  );
}
