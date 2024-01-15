import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../../services/shared.service";

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

  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit() {
  }


  goProductDetails() {
    this.sharedService.changeSelectedProduct(true)

    this.router.navigate(
      // ['/home/product', this.idProduct]
      ['../', 'home', 'product', this.idProduct], {relativeTo: this.route}
      // { queryParams: { id: this.idProduct}}
    )
  }
}
