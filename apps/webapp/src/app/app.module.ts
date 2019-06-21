import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchBoxComponent,
        WeatherListComponent,
        WeatherCardComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgxLoadingModule.forRoot({}),
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        RouterModule.forRoot([], { initialNavigation: 'enabled' })
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {}
