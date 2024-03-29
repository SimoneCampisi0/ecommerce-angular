import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginPageComponent} from "./login-module/login-page/login-page.component";
import {RegisterPageComponent} from "./register-module/register-page/register-page.component";
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {ProductDetailComponent} from "./product-module/product-detail/product-detail.component";
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomeComponent, children: [
      { path: 'product/:id', component: ProductDetailComponent }
    ]},
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found'} // Rotta che include gli URL non presenti qui. Dev'essere l'ultima.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
