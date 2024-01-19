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
  @Input() costoTotale = 0
  costoIntero: number = 0
  costoDecimale = 0

  // @Input() imgURL = ""

  constructor(private router: Router, private route: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit() {
    this.setDecimalPart()
  }

  setDecimalPart() {
    if(Number.isInteger(this.costoTotale)) {
      this.costoIntero = this.costoTotale
      this.costoDecimale = 0
    } else {
      this.costoDecimale = Number(this.costoTotale.toString().split('.')[1])
      this.costoIntero = this.costoTotale - this.costoDecimale
    }
  }

  goProductDetails() {
    this.sharedService.changeSelectedProduct(true)

    this.router.navigate(
      ['../', 'home', 'product', this.idProduct], {relativeTo: this.route}
    )
  }
}
