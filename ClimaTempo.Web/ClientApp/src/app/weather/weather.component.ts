import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})

export class WeatherComponent {
  public previsoes: Weathers[];
  public baseurl: string;
  txtSearch = 'São Paulo';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseurl = baseUrl;
    this.loadData(this.txtSearch);
  };

  update(txtSearch: string) { this.txtSearch = txtSearch; }
    
  loadData(locale: string) {
    this.http.get<Weathers[]>(this.baseurl + 'weathers/getbyname/'+locale).subscribe(result => {
      this.previsoes = result;
    }, error => console.error(error));
  }

  onSearch() {
    this.loadData(this.txtSearch);
  }
}

interface Period {
  begin: Date;
  end: Date;
}

interface Locale {
  id: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface Rain {
  probability: number;
  precipitation: number;
}

interface Weather {
  date: Date;
  text: string;
  temperture?: any;
  rain: Rain;
}

interface Weathers {
  period: Period;
  locale: Locale;
  weather: Weather[];
}
