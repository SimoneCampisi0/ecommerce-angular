import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ProductViewComponent} from "./product-page/product-view/product-view.component";
import {ProductComponent} from "./product-page/product-view/product/product.component";
import {LoginPageComponent} from "./login-module/login-page/login-page.component";
import {RegisterPageComponent} from "./register-module/register-page/register-page.component";
import {ErrorPageComponent} from "./shared/error-page/error-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'products-page', component: ProductPageComponent, children: [
  //     { path: 'products', component: ProductViewComponent, children: [{
  //         path: 'product', component: ProductComponent
  //       }]}
  //   ]}, Non necessario. //TODO implementare pagina dettaglio prodotto da acquistare
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found'} // Rotta che include gli URL non presenti qui. Dev'essere l'ultima.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
