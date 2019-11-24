import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListPrevisaoTempoComponent } from '../previsao-tempo/list-previsao-tempo/list-previsao-tempo.component';
import { FormPrevisaoTempoComponent } from '../previsao-tempo/form-previsao-tempo/form-previsao-tempo.component';
import { MatCardModule } from '@angular/material/card';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule
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
    declarations: [ ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        modules,
    ],
    exports: [
      modules
    ]
})
export class HomeModule { }
