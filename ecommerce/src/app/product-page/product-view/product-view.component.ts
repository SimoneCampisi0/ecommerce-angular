import { Component } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ProductDTO} from "../../../dtos/ProductDTO";
import {SortingOrder} from "../../../dtos/enums/sorting.order";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  pageNumber: number = 0

  pageSize: number = 5

  sortBy: string = "productName"

  sortingOrder: SortingOrder = SortingOrder.ASC

  sortingFilter: string = ""

  //@ts-ignore
  productList: ProductDTO[]

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService.listaProdottiPaginata(this.pageNumber, this.pageSize, this.sortBy, this.sortingOrder, this.sortingFilter).subscribe({
    //   next:(response) => {
    //     this.productList = response
    //   },
    //
    //   error:(error) => {
    //     console.log("error: ", error)
    //   }
    // })

    this.productService.listaProdotti().subscribe({
      next:(response) => {
        this.productList = response
      }
    })
  }
}
