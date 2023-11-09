import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductViewComponent} from "./home/product-view/product-view.component";
import {ProductComponent} from "./home/product-view/product/product.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
      { path: 'products', component: ProductViewComponent, children: [{
        path: 'product', component: ProductComponent
      }]}
    ]},
  // Altre route se necessario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
