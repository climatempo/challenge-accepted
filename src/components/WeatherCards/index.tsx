import Wrapper from "./styles";
import { Props } from "./types";

function WeatherCards({ weather }: Props) {
  return (
    <Wrapper>
      {weather.weather.map((item, index) => (
        <div key={index}>
          <h3>{item.text}</h3>
          <p>{item.date}</p>
        </div>
      ))}
    </Wrapper>
  );
}

export default WeatherCards;
