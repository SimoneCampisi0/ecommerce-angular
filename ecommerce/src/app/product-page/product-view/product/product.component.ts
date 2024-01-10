import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDTO} from "../../../../dtos/ProductDTO";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  // productDTO: ProductDTO

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    //TODO definire qui la ricezione del productDTO da ProductViewDTO

    const id = Number(this.route.snapshot.params['id'])
  }

  goProductDetails() { //
    // this.router.navigate("/product-details")
  }
}
