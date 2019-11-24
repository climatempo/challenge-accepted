import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '', redirectTo: '', pathMatch: 'full'
      },
    ]
  }
];

/**
 * Configuração global de rotas.
 *
 * @author Gabriel
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FuncionalidadesRoutingModule {
}
