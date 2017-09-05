import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-weather-invalid',
  templateUrl: './weather-invalid.component.html',
  styleUrls: ['./weather-invalid.component.scss']
})
export class WeatherInvalidComponent implements OnInit {
  location: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.location = params.get('location'));
  }
}
