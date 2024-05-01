import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginatorComponent} from "./paginator/paginator.component";
import {FiltersComponent} from "./filters/filters.component";
import {MatFormField, MatLabel, MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatSlider, MatSliderRangeThumb, MatSliderThumb} from "@angular/material/slider";



@NgModule({
  declarations: [
    PaginatorComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MatSelect,
    FormsModule,
    MatOption,
    MatLabel,
    MatFormField,
    MatSlider,
    MatSliderRangeThumb,
    MatSliderThumb
  ],
  exports: [
    PaginatorComponent,
    FiltersComponent
  ]
})
export class SharedModule { }
