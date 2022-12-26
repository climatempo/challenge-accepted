import { ListResponse } from '../../../types';
import { Locale } from '../../entities/Locale';
import { CreateLocaleDTO, ListLocaleDTO } from './locales.dto';

export interface ILocalesService {
  create(data: CreateLocaleDTO): Promise<Locale>;
  list(query: ListLocaleDTO): Promise<ListResponse<Locale>>;
}
