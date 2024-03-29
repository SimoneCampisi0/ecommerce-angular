import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ProductComponent} from "./product-view/product/product.component";



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductViewComponent,
    ProductComponent
  ],
  exports: [
    ProductViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
