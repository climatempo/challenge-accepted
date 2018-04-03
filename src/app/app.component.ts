import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeatherService } from './climatempo/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  locations: string[];

  constructor(private router: Router, private weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations() {
    this.weatherService.getLocations().subscribe(locations => this.locations = locations);
  }

  onSearch(location: string) {
    if (location.trim() == "") {
      this.router.navigate(['/weather']);
    } else {
      this.router.navigate([`/weather/${location.trim()}`]);
    }
  }
}
