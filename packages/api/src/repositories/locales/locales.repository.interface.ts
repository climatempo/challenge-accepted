import { ListParams, ListRepositoryResponse } from '../../../types';
import { Locale } from '../../entities/Locale';

export interface ListLocalesParams extends ListParams<Locale> {
  name: string;
}

export interface ILocalesRepository {
  list(params: ListLocalesParams): Promise<ListRepositoryResponse<Locale>>;
  create(data: Locale): Promise<Locale>;
}
