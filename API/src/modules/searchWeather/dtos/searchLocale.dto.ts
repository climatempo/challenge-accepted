import { IsString, MaxLength } from 'class-validator';

/**
 * Classe responsável por manter os dados de pesquisa que o usuário informou, o pipe irá verificar esses modelo a cadas requisição
 */
export class SearchLocaleDto {
  @IsString()
  @MaxLength(50)
  location: string;
}
