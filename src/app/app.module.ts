import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WeatherComponent } from './climatempo/weather/weather.component';
import { WeatherService } from './climatempo/weather/weather.service';
import { WeatherInvalidComponent } from './climatempo/weather-invalid/weather-invalid.component';
import { WeatherEmptyComponent } from './climatempo/weather-empty/weather-empty.component';
import { DatefyPipe } from './climatempo/datefy.pipe'

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherEmptyComponent },
  { path: 'weather/:location', component: WeatherComponent },
  { path: 'weather/invalid/:location', component: WeatherInvalidComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherInvalidComponent,
    WeatherEmptyComponent,
    DatefyPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
