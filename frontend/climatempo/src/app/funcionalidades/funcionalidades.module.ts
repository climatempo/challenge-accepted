import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { PrevisaoTempoComponent } from './previsao-tempo/previsao-tempo.component';
import { ListPrevisaoTempoComponent } from '../funcionalidades/previsao-tempo/list-previsao-tempo/list-previsao-tempo.component';
import { FormPrevisaoTempoComponent } from '../funcionalidades/previsao-tempo/form-previsao-tempo/form-previsao-tempo.component';
import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
];

/**
 * @author Gabriel
 */
@NgModule({
  declarations: [HomeComponent, PrevisaoTempoComponent, ListPrevisaoTempoComponent, FormPrevisaoTempoComponent],
  imports: [
    CommonModule,
    FuncionalidadesRoutingModule,
    FlexLayoutModule,
    HomeModule,
    modules,
    MatCardModule
  ],
  exports: [
    modules
  ]
})
export class FuncionalidadesModule {
}
