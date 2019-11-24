import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrevisaoTempoRouter } from './previsao-tempo.router';
// import {EmpresasClientService} from "../../client/empresas-client/empresas-client.service";


import { ListPrevisaoTempoComponent } from './list-previsao-tempo/list-previsao-tempo.component';
import { FormPrevisaoTempoComponent } from './form-previsao-tempo/form-previsao-tempo.component';

/**
 * @author GF
 */
@NgModule({
    declarations: [ListPrevisaoTempoComponent, FormPrevisaoTempoComponent],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(PrevisaoTempoRouter)
    ],
    providers: [
    ]
})
export class PrevisaoTempoModule {
}
