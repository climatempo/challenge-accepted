import { Skeleton, Typography } from "@mui/material";
import { DateTime } from "luxon";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import WeatherCard from "../components/Cards/WeatherCard";
import { getWeathers, listLocales } from "../providers/api";
import { ApiWeatherResponse } from "../providers/api/types";
import { CardsContainer, Placeholder, Wrapper } from "../styles/locale.styles";

type Props = ApiWeatherResponse;

export default function locale({ locale, period, weather }: Props) {
  const opa = true;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isFallback } = useRouter();
  if (isFallback)
    return (
      <Wrapper>
        <CardsContainer>
          {Array.from({ length: 6 }).map((_, index) => {
            return <Placeholder key={index} />;
          })}
        </CardsContainer>
      </Wrapper>
    );

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const localeParam = ctx?.params?.locale || "";
    const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam;

    if (!locale)
      return {
        redirect: "/",
        notFound: true,
      };

    const revalidateConfig = Number(process.env.REVALIDATE_PAGES) || 60 * 60;

    const now = DateTime.fromJSDate(new Date());
    const endDayRemaining = Math.round(
      now.endOf("day").diff(now, ["seconds"]).toObject()?.seconds ||
        revalidateConfig
    );

    const revalidate =
      revalidateConfig > endDayRemaining ? endDayRemaining : revalidateConfig;
    const begins = DateTime.fromJSDate(new Date()).startOf("day");
    const ends = DateTime.fromJSDate(new Date()).endOf("day").plus({ days: 4 });

    const props = await getWeathers({
      locale,
      begins,
      ends,
    });

    return {
      props,
      revalidate,
    };
  } catch (error) {
    console.log({ error });
    return { redirect: "/", notFound: true };
  }
};
