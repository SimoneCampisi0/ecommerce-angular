import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-module',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() idProduct = 0
  @Input() titolo = ""
  @Input() avaiable = false
  @Input() costo = 0
  // @Input() imgURL = ""

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  goProductDetails() {
    this.router.navigate(
      ['/home/product-detail', this.idProduct]
      // { queryParams: { id: this.idProduct}}
    )
  }
}
