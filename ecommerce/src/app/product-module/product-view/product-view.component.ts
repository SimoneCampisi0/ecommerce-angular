import {Component, OnInit} from '@angular/core';
import {ViewProductDTO} from "../../../dtos/ViewProductDTO";
import {ProductService} from "../../../services/product.service";
import {Page} from "../../../dtos/abstract/Page";

@Component({
  selector: 'app-product-module-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {

  pageNumber: number = 0

  pageSize: number = 5

  sortBy: string = "productName"

  productList: ViewProductDTO[] = []

  paginatorResponse!: Page<ViewProductDTO>

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.setSortingFilter('')
    this.productService.doQueryPaginatedList(this.pageNumber, this.pageSize, this.sortBy); // effettua la query
    this.productService.productsUpdatedListener() // Essendo un listener, riceve sempre i prodotti aggiornati
      .subscribe({
        next:(response) => {
          this.paginatorResponse = response;
          this.productList = response.content
        }
      })
  }

  changePageAndCallAPI(page: number) {
    this.pageNumber = page;
    console.log("pageToChange: ", this.pageNumber)
    this.productService.doQueryPaginatedList(this.pageNumber, this.pageSize, this.sortBy); // effettua la query
  }
}
