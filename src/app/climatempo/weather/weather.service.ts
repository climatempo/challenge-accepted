import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Forecast } from '../model/forecast';

@Injectable()
export class WeatherService {
  apiBase = 'http://localhost:4199/api';

  constructor(private http: Http) { }

  getLocations(): Observable<string[]> {
    const url = `${this.apiBase}/location`;
    return this.http.get(url)
      .map(response => response.json() as string[]);
  }

  getForecast(location: string): Observable<Forecast> {
    const url = `${this.apiBase}/weather/${this.normalizeLocation(location)}`;
    return this.http.get(url)
      .map(response => response.json() as Forecast)
      .catch((err: any) => Observable.throw('Not found'));
  }

  normalizeLocation(location: string): string {
    let parts = location.split(/\s+/g);
    let result: string[] = [];
    for (let part of parts) {
      switch(part) {
        case "da":
        case "das":
        case "do":
        case "dos":
        case "de":
          result.push(part);
          break;
        default:
          result.push(part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
      }
    }
    return result.join("%20");
  }
}
