import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

import { HomeComponent } from './home/home.component';
import { PrevisaoTempoComponent } from './previsao-tempo/previsao-tempo.component';
import { ListPrevisaoTempoComponent } from '../funcionalidades/previsao-tempo/list-previsao-tempo/list-previsao-tempo.component';
import { FormPrevisaoTempoComponent } from '../funcionalidades/previsao-tempo/form-previsao-tempo/form-previsao-tempo.component';
import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';

import { environment } from "../../environments/environment";

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
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiGoogle
    })
  ],
  exports: [
    modules
  ]
})
export class FuncionalidadesModule {
}
