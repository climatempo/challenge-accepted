import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { ModulosRoutingModule } from './modulos-routing.module';

/**
 * @author Gabriel
 */
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    HomeModule,
  ]
})
export class PagesModule {
}
