import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product-module-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id: number = 0
  constructor(private route: ActivatedRoute) {}

  ngOnInit() { //TODO: Da product.component.ts non si riesce ad arrivare qui.
    console.log("Product detail.")
    // const id = Number(this.route.snapshot.params['id'])

    this.route.params //Asincrono, si preferisce.
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id'])
        }
      )
  }
}