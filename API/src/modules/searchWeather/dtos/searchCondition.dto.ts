import { IsNumberString } from 'class-validator';

/**
 * Classe responsável por manter os dados de pesquisa que o usuário informou, o pipe irá verificar esses modelo a cadas requisição
 */
export class SearchConditionDto {
  @IsNumberString()
  id: string;
}
