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

  ngOnInit() {
    console.log("Product detail.")
    // const id = Number(this.route.snapshot.params['id'])

    this.route.params //Asincrono, si preferisce.
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id'])
        }
      )
  }

  //TODO: Rendere il valore selectedProduct in sharedService a false quando si abbandona questa pagina.
}
