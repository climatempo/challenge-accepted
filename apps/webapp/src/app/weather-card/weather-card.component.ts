import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '@climatempo/api-interface';

@Component({
    selector: 'climatempo-weather-card',
    templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent implements OnInit {
    @Input()
    public weather: Weather;

    constructor() {}

    ngOnInit() {}
}
