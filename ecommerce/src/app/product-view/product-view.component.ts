import {Component, OnInit} from '@angular/core';
import {SortingOrder} from "../../dtos/enums/sorting.order";
import {ProductService} from "../../services/product.service";
import {ProductDTO} from "../../dtos/ProductDTO";

@Component({
  selector: 'app-product-view',
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

    this.productService.listaProdottiPaginata(this.pageNumber, this.pageSize, this.sortBy, this.sortingOrder, this.sortingFilter).subscribe({
    // this.productService.listaProdotti().subscribe({
      next:(response) => {
        console.log(this.productList)
        this.productList = response.content
      }
    })
  }
}
