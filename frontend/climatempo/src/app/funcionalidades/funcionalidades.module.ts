import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];

/**
 * @author Gabriel
 */
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FuncionalidadesRoutingModule,
    HomeModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class FuncionalidadesModule {
}
