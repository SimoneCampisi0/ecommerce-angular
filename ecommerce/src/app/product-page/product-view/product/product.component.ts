import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductDTO} from "../../../../dtos/ProductDTO";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // productDTO: ProductDTO

  constructor(private router: Router) {}

  ngOnInit() {
    //TODO definire qui la ricezione del productDTO da ProductViewDTO
  }

  goProductDetails() { //
    // this.router.navigate("/product-details")
  }
}
