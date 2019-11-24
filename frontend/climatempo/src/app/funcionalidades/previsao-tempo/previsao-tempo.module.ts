import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule
} from '@angular/material';


import { ListPrevisaoTempoComponent } from './list-previsao-tempo/list-previsao-tempo.component';
import { FormPrevisaoTempoComponent } from './form-previsao-tempo/form-previsao-tempo.component';


const modules = [
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
];

/**
 * @author Gabriel
 */
@NgModule({
  declarations: [ListPrevisaoTempoComponent, FormPrevisaoTempoComponent],
  imports: [
    CommonModule,
    RouterModule,
    modules
  ],
  exports: [
    modules
  ],
  providers: [
  ]
})
export class PrevisaoTempoModule {
}
