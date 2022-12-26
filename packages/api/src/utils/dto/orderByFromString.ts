import { OrderBy } from '../../../types';

type OrderByObject<T> = Record<keyof T, OrderBy>;

export function orderByFromString<T extends Record<keyof T, any>>(
  param: string,
): OrderByObject<T> | string {
  const splitted = param.split('_');
  const key = splitted[0].length ? splitted[0] : null;
  const direction = splitted[1]?.length ? splitted[1] : 'asc';

  if (!key) return '';

  if (!['asc', 'desc'].includes(direction)) return '';

  return { [key]: direction } as OrderByObject<T>;
}
