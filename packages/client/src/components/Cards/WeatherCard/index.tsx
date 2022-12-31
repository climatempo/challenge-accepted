import { Typography } from "@mui/material";
import { Weather } from "../../../providers/api/types";
import { shortDate, translateDate } from "../../../utils/date";
import {
  Card,
  NumberLabel,
  CardRow,
  Box,
  CardHeader,
  CardBody,
} from "./styles";
import { IoIosWater } from "react-icons/io";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsUmbrella } from "react-icons/bs";

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
      <CardHeader>
        <Typography variant="h4" color={"var(--gray-900)"}>
          {translateDate(date)}
        </Typography>
        <Typography variant="subtitle1">{shortDate(date)}</Typography>
        <Typography
          variant="body1"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {text}
        </Typography>
      </CardHeader>
      <CardBody>
        <Typography variant="h5">Temperatura</Typography>
        <CardRow>
          <Box>
            <AiOutlineArrowDown size={32} color={"var(--green)"} />
            <NumberLabel variant="h4">{temperatureMin}°C</NumberLabel>
          </Box>
          <Box>
            <AiOutlineArrowUp size={32} color={"var(--red)"} />
            <NumberLabel variant="h4">{temperatureMax}°C</NumberLabel>
          </Box>
        </CardRow>
        <Typography variant="h5">Chuva</Typography>
        <CardRow>
          <Box>
            <IoIosWater size={28} />
            <NumberLabel variant="h5">{precipitation}mm</NumberLabel>
          </Box>
          <Box>
            <BsUmbrella size={28} />
            <NumberLabel variant="h4">{probability}%</NumberLabel>
          </Box>
        </CardRow>
      </CardBody>
    </Card>
  );
}
