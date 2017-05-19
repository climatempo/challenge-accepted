import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Locale } from '../../providers/locales'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Locale]
})
export class HomePage {
  localeWeather: Array<any>;
  data: string;

  constructor(public navCtrl: NavController, public locale: Locale) {  }

  getItems(ev){
    this.data = ev.target.value;

    if (ev.target.value.length > 3 && ev.target.value.trim() !== '') {
      this.locale.getLocale(ev.target.value).subscribe(data => {
        if (data === 'Location not found') {
          return '';
        }

        this.localeWeather = data;
      }, err => {
        console.log('error:', err);
      });
    }
  }

}
