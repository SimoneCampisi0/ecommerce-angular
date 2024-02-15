import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-detail-description',
  templateUrl: './product-detail-description.component.html',
  styleUrl: './product-detail-description.component.css'
})
export class ProductDetailDescriptionComponent {
  @Input()
  productDescription: string = ""


}
