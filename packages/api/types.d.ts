export type OrderBy = 'asc' | 'desc';

export type OrderParam<T> = Record<keyof T, OrderBy>;

export interface ListParams<T> {
  page?: number;
  pageLimit?: number;
  orderBy?: OrderBy<T>;
}

interface ListRepositoryResponse<T> {
  list: T[];
  count: number;
}

interface ListRequestParams<T> {
  page?: number;
  pageSize?: number;
  orderBy: OrderBy<T>;
}

interface ListResponse<T> {
  list: T[];
  count: number;
  page: number;
  pageSize: number;
}
