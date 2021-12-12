import api from "./api";

const endPoint = "/locale";

export const getLocales = async (searchterm) => {
  const res = await api.get(endPoint, {
    params: {
      s: searchterm,
    },
  });
  return res.data;
};
