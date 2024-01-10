import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import {LoginModule} from "./login-module/login.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterModule} from "./register-module/register.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./jwt.interceptor";
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {ProductComponent} from "./product-view/product/product.component";
import {ProductViewComponent} from "./product-view/product-view.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductViewComponent,
    ProductComponent,
    HeroComponent,
    ErrorPageComponent
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
