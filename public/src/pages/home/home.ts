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

  constructor(public navCtrl: NavController, public locale: Locale) {  }

  getItems(ev){
    if (ev.target.value.length > 5 && ev.target.value.trim() !== '') {
      this.locale.getLocale(ev.target.value).subscribe(data => {
        this.localeWeather = data;
        console.log(this.localeWeather);
      }, err => {
        console.log('error:', err);
      });
    }
  }

}
