import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Locale } from '@climatempo/api-interface';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

import { ApiService } from '../api.service';

@Component({
    selector: 'climatempo-search-box',
    templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
    public autocompleteControl = new FormControl();
    public filteredLocales$: Observable<Locale[]>;

    @Output()
    public onLocaleSelect = new EventEmitter<number>();

    public ngOnInit() {
        this.setupAutocomplete();
    }

    public getLocaleName(locale?: Locale): string {
        return locale ? locale.name : null;
    }

    public onAutocomplete() {
        this.onLocaleSelect.emit(this.autocompleteControl.value);
    }

    private setupAutocomplete() {
        this.filteredLocales$ = this.autocompleteControl.valueChanges.pipe(
            debounceTime(300),
            filter(text => text.length >= 3),
            switchMap(text => this.api.filterLocales(text))
        );
    }

    constructor(private readonly api: ApiService) {}
}
