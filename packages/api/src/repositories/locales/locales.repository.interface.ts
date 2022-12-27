import { ListParams, ListRepositoryResponse } from '../../../types';
import { Locale } from '../../entities/Locale';

export interface ListLocalesParams extends ListParams<Locale> {
  name: string;
}

export interface ILocalesRepository {
  create(data: Locale): Promise<Locale>;
  list(params: ListLocalesParams): Promise<ListRepositoryResponse<Locale>>;
  find(name: string): Promise<Locale | null>;
}
