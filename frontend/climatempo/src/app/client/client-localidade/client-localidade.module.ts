import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientLocalidadeService } from './client-localidade.service';

/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        ClientLocalidadeService
    ]
})
export class ClientLocalidadeModule {
}
