import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';

/**
 * @author Gabriel
 */
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FuncionalidadesRoutingModule,
    HomeModule,
  ]
})
export class FuncionalidadesModule {
}
