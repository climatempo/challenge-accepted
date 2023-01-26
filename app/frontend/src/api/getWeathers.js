import baseEndpoint from './baseEndpoint';

export const getWeatherByLocale = async (localeName, authorization) => {
  const headers = {
    'Content-Type': 'application/json',
    authorization,
  };

  const weatherByLocale = await fetch(
    `${baseEndpoint}/weathers?locale=${localeName}`,
    {
      headers,
    }
  ).then((response) => response.json());
  return weatherByLocale;
};
