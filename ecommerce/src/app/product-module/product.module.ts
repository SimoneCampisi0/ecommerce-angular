import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ProductComponent} from "./product-view/product/product.component";
import {ShortenPipe} from "../../pipes/shorten.pipe";
import {FormsModule} from "@angular/forms";
import {ProductDetailDescriptionComponent} from "./product-detail-description/product-detail-description.component";
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductViewComponent,
    ProductComponent,
    ProductDetailDescriptionComponent
  ],
  exports: [
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ShortenPipe,
    FormsModule,
    RouterOutlet
  ]
})
export class ProductModule { }
