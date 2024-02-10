import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {SharedService} from "../../../services/shared.service";
import {ProductService} from "../../../services/product.service";
import {DetailProductDTO} from "../../../dtos/DetailProductDTO";

@Component({
  selector: 'app-product-module-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id: number = 0

  //@ts-ignore
  productResponse: DetailProductDTO

  seller = "Mario Rossi" //TODO: collegare al seller effettivo.

  radioSelected!: string

  constructor(private route: ActivatedRoute, private sharedService: SharedService, private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
        this.productService.getProductById(this.id).subscribe(
          (productResponse) => {
            this.productResponse = productResponse;
          }
        );
      },
      (error) => {
        console.error("Error: " + error);
      }
    );
  }


  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.sharedService.changeSelectedProduct(false)
  }

}
