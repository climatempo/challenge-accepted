import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Component({
    selector: 'climatempo-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public error$: Observable<any>;
    public loading$: Observable<boolean>;

    public ngOnInit() {
        this.error$ = this.api.error$;
        this.loading$ = this.api.loading$;
    }

    constructor(private readonly api: ApiService) {}
}
