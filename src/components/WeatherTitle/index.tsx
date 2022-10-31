import HomeAnchor from "../HomeAnchor";
import Wrapper, { Title } from "./styles";
import { Props } from "./types";

function WeatherTitle({ locale }: Props) {
  return (
    <Wrapper>
      <HomeAnchor />
      <Title>Previsão para {locale}</Title>
    </Wrapper>
  );
}

export default WeatherTitle;
