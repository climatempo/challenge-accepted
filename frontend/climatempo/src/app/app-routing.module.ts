import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    loadChildren: () => import('./funcionalidades/funcionalidades.module').then(module => module.FuncionalidadesModule)
  }
];

/**
 * @author Gabriel
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
