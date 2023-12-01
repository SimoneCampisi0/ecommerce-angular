import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterPageComponent} from "./register-page/register-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet
  ]
})
export class RegisterModule { }
