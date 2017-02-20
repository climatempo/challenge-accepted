import { Injectable } from '@angular/core';
import { Http, Response   } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class Locale {

  private baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = 'http://localhost:4000/api?locale='
  }

  getLocale(locale) {
    return this.http.get(`${this.baseUrl}${locale}`)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
