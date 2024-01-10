import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input() titolo = ""
  @Input() avaiable = false
  @Input() costo = 0
  // @Input() imgURL = ""

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    //TODO definire qui la ricezione del productDTO da ProductViewDTO
    //   Da implementare nella pagina del prodotto
    // const id = Number(this.route.snapshot.params['id'])
  }

  goProductDetails() { //
    // this.router.navigate("/product-details")
  }
}
