import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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

  ngOnInit() {
    if(!this.selectedOrder) {
      this.selectedOrder = "0";
    }
  }

  onDropSortChange(event: any) {
    console.log("select change: ", event);
  }

  // // TODO: collegarlo con la chiamata API
  // onSelectionChange(event: any) {
  //   this.selectedOrder = event.target.value;
  //   console.log("valore emesso: ", this.selectedOrder)
  // }
  //
  // formatLabel(value: number): string {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000)+"";
  //   }
  //
  //   return `${value}`;
  // }
}
