import {Routes} from '@angular/router';
import {FormPrevisaoTempoComponent} from './form-previsao-tempo/form-previsao-tempo.component';

/**
 * Configurações de rota de atividade.
 *
 * @author Gabriel
 */
export const PrevisaoTempoRouter: Routes = [
  {
    path: 'listar',
    component: FormPrevisaoTempoComponent,
  }

];
