import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Locale, Weather } from '@climatempo/api-interface';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {
    private loadingSubject = new BehaviorSubject(false);
    public loading$ = this.loadingSubject.asObservable();

    private errorSubject = new BehaviorSubject(null);
    public error$: Observable<any> = this.errorSubject.asObservable();

    public getWeatherByLocale(locale: Locale): Observable<Weather[]> {
        this.loadingSubject.next(true);
        return this.http.get<Weather[]>(`http://localhost:3000/weather/locale/${locale.id}`).pipe(
            tap(() => this.loadingSubject.next(false)),
            catchError(err => this.catchError(err))
        );
    }

    public filterLocales(text: string): Observable<Locale[]> {
        this.loadingSubject.next(true);

        return this.http.get<Locale[]>(`http://localhost:3000/locale/filter/${text}`).pipe(
            tap(() => this.loadingSubject.next(false)),
            catchError(err => this.catchError(err))
        );
    }

    private catchError(err: any): Observable<any> {
        this.loadingSubject.next(false);
        this.errorSubject.next(err);
        return of(null);
    }

    constructor(private http: HttpClient) {}
}
