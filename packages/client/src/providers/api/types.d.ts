interface Locale {
  id: string;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface Pagination {
  page?: number;
  pageSize?: number;
}

export type OrderBy = "asc" | "desc";

export type OrderParam<T> = Record<keyof T, OrderBy>;

interface ApiListRequest<T = Record<string, any>> extends Pagination {
  params?: Partial<T>;
}

interface ApiListResponse<T = any> {
  list: T[];
  page: number;
  pageSize: number;
  count: number;
}

interface Weather {
  id: string;
  localeId: string;
  date: string;
  text: string;
  temperatureMin: number;
  temperatureMax: number;
  probability: number;
  precipitation: number;
}

interface Period {
  begins: string;
  ends: string;
}

interface ApiWeatherRequest {
  locale: string;
  begins: Date | Datetime;
  ends: Date | Datetime;
}

interface ApiWeatherResponse {
  locale: Locale;
  period: Period;
  weather: Weather[];
}
