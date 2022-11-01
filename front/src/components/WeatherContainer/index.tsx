import { useNavigate, useParams } from "react-router-dom";
import useWeather from "../../modules/hooks/use-weather";
import WeatherTitle from "../WeatherTitle";
import WeatherCards from "../WeatherCards";
import Wrapper from "./styles";
import Loading from "../Loading";
import { useEffect } from "react";

function WeatherContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { weather, locale, isLoading } = useWeather(id);

  useEffect(() => {
    if (!weather && !isLoading) navigate("/");
  }, [weather, isLoading]);

  const render = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (weather) {
      return (
        <>
          <WeatherTitle locale={locale} />
          <WeatherCards weather={weather} />
        </>
      );
    }
    return null;
  };

  return <Wrapper>{render()}</Wrapper>;
}

export default WeatherContainer;
