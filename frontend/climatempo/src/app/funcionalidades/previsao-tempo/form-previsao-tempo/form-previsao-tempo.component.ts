import { Component, OnInit } from '@angular/core';
import { ClientTempoService } from '../../../client/client-tempo/client-tempo.service';
import { ClientLocalidadeService } from '../../../client/client-localidade/client-localidade.service';

/**
 * @author Gabriel
 */
@Component({
    selector: 'form-previsao-tempo',
    templateUrl: './form-previsao-tempo.component.html',
    styleUrls: ['./form-previsao-tempo.component.scss']
})
export class FormPrevisaoTempoComponent implements OnInit {
    public localidades;

    public previsaoTempo;

    /**
     * Contrutor da classe.
     * @param clientLocalidadeService.
     * @param clientTempoService.
     */
    constructor(
        private clientLocalidadeService: ClientLocalidadeService,
        private clientTempoService: ClientTempoService,
    ) {
    }

    /**
     * Inicializa o componente.
     */
    ngOnInit(): void {
        this.getLocalidades();
    }
    /**
     * Recupera as localidades no service.
     */
    public getLocalidades(): void {
        this.clientLocalidadeService.getLocalidades().subscribe(localidades => {
            this.localidades = localidades
        }, error => {
            console.log(error);
        });
    }

    /**
     * Recupera previsoes do tempo de uma determinada cidade.
     * @param idCidade 
     */
    public getPrevisaoTempoPorCidade(idCidade): void {
        this.previsaoTempo = null;

        if (idCidade) {
            this.clientTempoService.getPrevisaoTempoPorCidade(idCidade).subscribe(previsaoTempo => {
                this.previsaoTempo = previsaoTempo
            }, error => {
                console.log(error);
            });
        }

    }
}
