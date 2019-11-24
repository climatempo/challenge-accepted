import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Modulo principal da aplicação.
 *
 * @author Gabriel
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  /**
   * Construtor do Modulo.
   *
   * @param localeService
   */
  constructor() {
  }

}
