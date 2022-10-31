import WeatherCard from ".";
import { useConfigContext } from "../../modules/contexts/config";
import useWeatherCardData from "../../modules/hooks/use-weather-card-data";
import { ContainerProps } from "./types";

function WeatherCardContainer({ data }: ContainerProps) {
  const { rainUnit, tempUnit } = useConfigContext()
  const formattedData = useWeatherCardData(data, rainUnit, tempUnit);

  return <WeatherCard {...formattedData} />;
}

export default WeatherCardContainer;
