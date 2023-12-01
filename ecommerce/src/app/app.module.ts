import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductViewComponent } from "./product-page/product-view/product-view.component";
import { ProductComponent } from "./product-page/product-view/product/product.component";
import {LoginModule} from "./login-module/login.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterModule} from "./register-module/register.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductViewComponent,
    ProductComponent,
    HeroComponent,
    ProductPageComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
