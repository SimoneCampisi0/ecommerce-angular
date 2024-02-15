import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-detail-description',
  templateUrl: './product-detail-description.component.html',
  styleUrl: './product-detail-description.component.css'
})
export class ProductDetailDescriptionComponent {
  @Input()
  productDescription: string = ""


}
