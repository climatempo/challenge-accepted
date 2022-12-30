import { Typography } from "@mui/material";
import { Weather } from "../../../providers/api/types";
import { shortDate, translateDate } from "../../../utils/date";
import { Card, TemperatureBox, TemperatureContainer } from "./styles";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

type Props = {
  weather: Weather;
};

export default function WeatherCard({
  weather: {
    date,
    text,
    temperatureMin,
    temperatureMax,
    probability,
    precipitation,
  },
}: Props) {
  return (
    <Card>
      <Typography variant="h4" color={"var(--gray-900)"}>
        {translateDate(date)}
      </Typography>
      <Typography variant="subtitle1">{shortDate(date)}</Typography>
      <Typography variant="body1">{text}</Typography>
      <TemperatureContainer>
        <TemperatureBox>
          <AiOutlineArrowDown size={32} color={"var(--green)"} />
          <Typography variant="h4" color={"var(--gray-600)"}>{temperatureMin}</Typography>
        </TemperatureBox>
        <TemperatureBox>
          <AiOutlineArrowUp size={32} color={"var(--red)"} />
          <Typography variant="h4" color={"var(--gray-600)"}>{temperatureMax}</Typography>
        </TemperatureBox>
      </TemperatureContainer>
      <TemperatureContainer>
        <TemperatureBox>
          <Typography variant="h5" color={"var(--gray-600)"}>{precipitation}mm</Typography>
        </TemperatureBox>
        {"-"}
        <TemperatureBox>
          <Typography variant="h5" color={"var(--gray-600)"}>{probability}%</Typography>
        </TemperatureBox>
      </TemperatureContainer>
    </Card>
  );
}
