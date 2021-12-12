import api from "./api";

const endPoint = "/weather";

export const getWeather = async (localeId, temperatureMeasure, rainMeasure) => {
  const res = await api.get(`/locale/${localeId}${endPoint}`, {
    params: {
      temp: temperatureMeasure,
      rain: rainMeasure,
    },
  });
  return res.data;
};
