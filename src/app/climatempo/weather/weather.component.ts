import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { WeatherService } from './weather.service';
import { Forecast } from '../model/forecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  forecast: Forecast;

  constructor(private router: Router, private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.fetchForecast(params.get('location')));
  }

  fetchForecast(location: string) {
    this.weatherService.getForecast(location)
      .subscribe(
        forecast => { this.forecast = forecast[0] },
        err => {
          this.router.navigate([`/weather/invalid/${location}`]);
        }
      );
  }
}
