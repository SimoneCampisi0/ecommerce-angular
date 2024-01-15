import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SortingOrder} from "../../../dtos/enums/sorting.order";
import {ProductDTO} from "../../../dtos/ProductDTO";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product-module-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {

  pageNumber: number = 0

  pageSize: number = 5

  sortBy: string = "productName"

  sortingOrder: SortingOrder = SortingOrder.ASC

  sortingFilter: string = ""

  productList: ProductDTO[] = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    //TODO: Soluzione temporanea. Trovare un tool che permetta in Angular di gestire il JSON paginato che arriva dal BE.

    // this.productService.listaProdottiPaginata(this.pageNumber, this.pageSize, this.sortBy, this.sortingOrder, this.sortingFilter).subscribe({
    this.productService.listaProdotti().subscribe({
      next:(response) => {
        console.log(this.productList)
        // this.productList = response.content
        this.productList = response
      }
    })
  }
}
