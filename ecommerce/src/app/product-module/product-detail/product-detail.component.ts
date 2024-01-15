import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-product-module-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id: number = 0

  constructor(private route: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit() {
    this.route.params //Asincrono, si preferisce.
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id'])
        }
      )
  }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.sharedService.changeSelectedProduct(false)
  }

}
