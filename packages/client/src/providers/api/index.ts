import axios from "axios";
import {
  ApiListRequest,
  ApiListResponse,
  ApiWeatherRequest,
  ApiWeatherResponse,
  Locale,
} from "./types";

const api = axios.create({ baseURL: "http://localhost:3333" });

export const listLocales = async ({
  params = {},
  page = 1,
  pageSize = 20,
}: ApiListRequest<Locale>): Promise<ApiListResponse<Locale>> => {
  return api
    .get<ApiListResponse<Locale>>("locales", {
      params: { ...params, page, pageSize },
    })
    .then(({ data }) => data);
};

export const getWeathers = async (
  payload: ApiWeatherRequest
): Promise<ApiWeatherResponse> => {
  return api
    .get<ApiWeatherResponse>("weather", { params: payload })
    .then(({ data }) => data);
};
