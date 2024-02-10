import {PhotoDTO} from "./PhotoDTO";
import {AbstractProductDTO} from "./abstract/AbstractProductDTO";

export class ViewProductDTO extends AbstractProductDTO {
  firstPhotoResponse: PhotoDTO

  colorsResponse: string[]

  constructor(idProduct: number,

  productName: string,

  productDesq: string,

  productCost: number,

  available: boolean,

  codSeller: number,

  firstPhotoResponse: PhotoDTO,

  colorsResponse: string[]) {
    super(idProduct, productName, productDesq, productCost, available, codSeller)
    this.firstPhotoResponse = firstPhotoResponse
    this.colorsResponse = colorsResponse
  }
}
