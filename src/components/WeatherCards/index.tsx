import WeatherCard from "../WeatherCard";
import Wrapper from "./styles";
import { Props } from "./types";

function WeatherCards({ weather }: Props) {
  return (
    <Wrapper>
      {weather.weather.map((item, index) => (
        <WeatherCard data={item} key={index} />
      ))}
    </Wrapper>
  );
}

export default WeatherCards;
