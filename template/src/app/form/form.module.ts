import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleComponent } from './components/simple/simple.component';
import { GridFormComponent } from './components/grid-form/grid-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    SimpleComponent,
    GridFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
