import axios, { AxiosError, AxiosInstance } from 'axios';
import {
  ApiLocale,
  ApiWeather,
  Enviroments,
  SeedCity,
  SeedState,
} from './types';

const validateEnviroments = (): Enviroments => {
  const env = {
    serverPort: Number(process.env.SERVER_PORT) || 3333,
  };

  const missingParams = Object.entries(env).filter(([key, value]) => !value);

  if (missingParams.length)
    throw Error(
      `Missing ${missingParams.map(([key]) => key).join(',')} params.`,
    );

  return env;
};

runSeeds();

async function runSeeds() {
  try {
    const { serverPort } = validateEnviroments();
    const api = axios.create({ baseURL: `http://localhost:${serverPort}` });

    const seedLocales = async (api: AxiosInstance): Promise<ApiLocale[]> => {
      const { data: cities } = await axios.get<SeedCity[]>(
        'https://raw.githubusercontent.com/kelvins/Municipios-Brasileiros/main/json/municipios.json',
      );
      const { data: states } = await axios.get<SeedState[]>(
        'https://raw.githubusercontent.com/kelvins/Municipios-Brasileiros/main/json/estados.json',
      );

      const saveLocale = (locale: ApiLocale) =>
        api
          .post<ApiLocale>('/locales', locale)
          .then(({ data }) => data)
          .catch((err: AxiosError<{ message: string }>) => {
            if (err?.response?.data?.message === 'Locale already exists')
              return locale;
            throw Error(err?.message || 'unexpected error');
          });

      console.log(`Inserindo ${cities.length} cidades`);

      const perChunk = 5;
      const chunckCities: SeedCity[][] = cities.reduce(
        (resultArray, item, index) => {
          const chunkIndex = Math.floor(index / perChunk);

          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
          }

          resultArray[chunkIndex].push(item);

          return resultArray;
        },
        [],
      );

      const locales: ApiLocale[] = [];

      for (const index in chunckCities) {
        const chunck = chunckCities[index];
        await Promise.all(
          chunck.map(async ({ nome, codigo_uf, latitude, longitude }) => {
            console.log(`Inserindo ${nome} no banco de dados`);
            locales.push(
              await saveLocale({
                name: nome,
                state:
                  states.find((it) => it.codigo_uf === codigo_uf)?.uf || 'N/A',
                latitude,
                longitude,
              }),
            );
          }),
        );
      }

      return locales;
    };

    const seedWeather = async (locales: ApiLocale[], api: AxiosInstance) => {
      const generateDate = (addDays: number): Date => {
        const today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setDate(today.getDate() + addDays);
        return today;
      };

      function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      const mockWeather = ({ name }: ApiLocale) => {
        return Array.from({ length: 10 }).map((_, index) => {
          const temperatureMin = randomIntFromInterval(0, 25);
          return {
            locale: name,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
            date: generateDate(index - 2),
            temperatureMin,
            temperatureMax: temperatureMin + randomIntFromInterval(5, 10),
            precipitation: randomIntFromInterval(10, 50),
            probability: randomIntFromInterval(10, 100),
          };
        });
      };

      const saveWeather = (weather: ApiWeather) =>
        api
          .post<ApiWeather>('/weather', weather)
          .then(({ data }) => data)
          .catch(() => {
            return weather;
          });

      for (const index in locales) {
        const locale = locales[index];
        const weatherList = mockWeather(locale);
        console.log(
          `[${Number(index) + 1}/${locales.length}] inserindo previsões de ${
            locale.name
          } - ${locale.state}`,
        );
        await Promise.all(weatherList.map((weather) => saveWeather(weather)));
      }
    };

    const locales = await seedLocales(api);
    await seedWeather(locales, api);
  } catch (error) {
    console.log(error);
  }
}
