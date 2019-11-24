import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    loadChildren: () => import('./modulos/modulos.module').then(module => module.PagesModule)
  }
];

/**
 * @author GF
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
