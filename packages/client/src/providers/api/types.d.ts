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
