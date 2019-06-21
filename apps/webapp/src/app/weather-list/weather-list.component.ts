import { Component } from '@angular/core';
import { Locale, Weather } from '@climatempo/api-interface';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
    selector: 'climatempo-weather-list',
    templateUrl: './weather-list.component.html'
})
export class WeatherListComponent {
    public selectedLocale: Locale;
    public weather$: Observable<Weather[]>;

    public updateCards(locale: Locale) {
        this.selectedLocale = locale;
        this.weather$ = this.api.getWeatherByLocale(locale);
    }

    constructor(private readonly api: ApiService) {}
}
