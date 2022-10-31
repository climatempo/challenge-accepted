import { useParams } from "react-router-dom";
import useWeather from "../../modules/hooks/use-weather";
import WeatherTitle from "../WeatherTitle";
import WeatherCards from "../WeatherCards";
import Wrapper from "./styles";

function WeatherContainer() {
  const { id } = useParams();
  const { weather, locale } = useWeather(id);

  return (
    <Wrapper>
      {weather && (
        <>
          <WeatherTitle locale={locale} />
          <WeatherCards weather={weather} />
        </>
      )}
    </Wrapper>
  );
}

export default WeatherContainer;
