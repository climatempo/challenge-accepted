import { Typography } from "@mui/material";
import { DateTime } from "luxon";
import { GetServerSideProps, GetStaticProps } from "next";
import WeatherCard from "../components/Cards/WeatherCard";
import { getWeathers } from "../providers/api";
import { ApiWeatherResponse } from "../providers/api/types";
import { CardsContainer, Wrapper } from "./locale.styles";

type Props = ApiWeatherResponse;

export default function Locale({ locale, period, weather }: Props) {
  const title = weather.length
    ? `Previsões para ${locale.name} - ${locale.state}`
    : `Nenhuma previsão para ${locale.name} - ${locale.state}`;

  return (
    <Wrapper>
      <Typography
        variant="h3"
        textAlign={"center"}
        sx={{ textAlign: "center", color: "var(--gray-700)" }}
      >
        {title}
      </Typography>
      <CardsContainer>
        {weather.map((localeWeather, index) => {
          return (
            <WeatherCard key={index} weather={localeWeather}></WeatherCard>
          );
        })}
      </CardsContainer>
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const localeParam = ctx?.params?.Locale || "";
    const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam;

    if (!locale)
      return {
        redirect: "/",
        notFound: true,
      };
    const begins = DateTime.fromJSDate(new Date()).startOf("day");
    const ends = DateTime.fromJSDate(new Date()).endOf("day").plus({ days: 6 });

    const props = await getWeathers({
      locale,
      begins,
      ends,
    });

    return {
      props,
    };
  } catch (error) {
    return { redirect: "/", notFound: true };
  }
};
