import WeatherCardContainer from "../WeatherCard/container";
import Wrapper from "./styles";
import { Props } from "./types";

function WeatherCards({ weather }: Props) {
  return (
    <Wrapper>
      {weather.weather.map((item, index) => (
        <WeatherCardContainer data={item} key={index} />
      ))}
    </Wrapper>
  );
}

export default WeatherCards;
