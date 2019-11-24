import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientTempoService } from './client-tempo.service';

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
        ClientTempoService
    ]
})
export class ClientTempoModule {
}
