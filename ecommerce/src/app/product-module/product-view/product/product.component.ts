import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() selectedProduct = new EventEmitter<boolean>()

  // @Input() imgURL = ""

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  setSelectedProduct() {
    this.selectedProduct.emit(true)
  }

  goProductDetails() {
    this.setSelectedProduct()

    this.router.navigate(
      // ['/home/product', this.idProduct]
      ['../', 'home', 'product', this.idProduct], {relativeTo: this.route}
      // { queryParams: { id: this.idProduct}}
    )
  }
}
