import {Component, OnInit} from '@angular/core';
import {SortingOrder} from "../../../dtos/enums/sorting.order";
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

  sortingOrder: SortingOrder = SortingOrder.ASC

  productList: ViewProductDTO[] = []

  paginatorResponse!: Page<ViewProductDTO>

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.setSortingFilter('')
    this.productService.doQueryPaginatedList(this.pageNumber, this.pageSize, this.sortBy, this.sortingOrder); // effettua la query
    this.productService.productsUpdatedListener() // Essendo un listener, riceve sempre i prodotti aggiornati
      .subscribe({
        next:(response) => {
          this.paginatorResponse = response;
          this.productList = response.content

          console.log("response: ", response)
              console.log("productList: ", this.productList)
              console.log("this.paginatorResponse: ", this.paginatorResponse)

        }
      })
  }

  changePageAndCallAPI(page: number) {
    this.pageNumber = page;
    this.productService.doQueryPaginatedList(this.pageNumber, this.pageSize, this.sortBy, this.sortingOrder); // effettua la query

  }
}
