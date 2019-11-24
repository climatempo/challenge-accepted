import { Component, Input, OnInit } from '@angular/core';

/**
 * @author Gabriel
 */
@Component({
    selector: 'list-previsao-tempo',
    templateUrl: './list-previsao-tempo.component.html',
    styleUrls: ['./list-previsao-tempo.component.scss']
})
export class ListPrevisaoTempoComponent implements OnInit {
    @Input() previsaoTempo: any[];

    constructor() {
    }

    ngOnInit() {
    }


}
