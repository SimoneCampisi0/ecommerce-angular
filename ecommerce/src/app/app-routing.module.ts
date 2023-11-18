import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ProductViewComponent} from "./product-page/product-view/product-view.component";
import {ProductComponent} from "./product-page/product-view/product/product.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products-page', component: ProductPageComponent, children: [
      { path: 'products', component: ProductViewComponent, children: [{
          path: 'product', component: ProductComponent
        }]}
    ]}
  // Altre route se necessario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
