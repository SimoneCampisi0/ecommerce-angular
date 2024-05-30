import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {SortingOrder} from "../../../dtos/enums/sorting.order";

@Component({
  selector: 'app-filters-component',
  templateUrl: './filters.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit{
  selectedOrder!: string;
  dropSortLabel: string = "Ordina per";
  dropSortOptions: string[] = ["Ascendente", "Discendente"];
  selectedValue!: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    if(!this.selectedOrder) {
      this.selectedOrder = "0";
    }
  }

  onDropSortChange(event: any) {
    console.log("select change: ", event);
    this.productService.doQueryPaginatedList(undefined, undefined, undefined, Number(this.selectedOrder) == 0 ? SortingOrder.ASC : SortingOrder.DESC);
  }

  // formatLabel(value: number): string {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000)+"";
  //   }
  //
  //   return `${value}`;
  // }
}
