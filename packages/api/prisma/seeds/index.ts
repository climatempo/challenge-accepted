import axios from 'axios';
import { ApiLocale, Enviroments, SeedCity, SeedState } from './types';

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
    const { data: cities } = await axios.get<SeedCity[]>(
      'https://raw.githubusercontent.com/kelvins/Municipios-Brasileiros/main/json/municipios.json',
    );
    const { data: states } = await axios.get<SeedState[]>(
      'https://raw.githubusercontent.com/kelvins/Municipios-Brasileiros/main/json/estados.json',
    );

    const api = axios.create({ baseURL: `http://localhost:${serverPort}` });

    const saveLocale = (locale: ApiLocale) => api.post('/locales', locale);

    await Promise.all(
      cities.map(({ nome, codigo_uf, latitude, longitude }) =>
        saveLocale({
          name: nome,
          state: states.find((it) => it.codigo_uf === codigo_uf)?.uf || 'N/A',
          latitude,
          longitude,
        }),
      ),
    );
  } catch (error) {
    console.log(error);
  }
}
