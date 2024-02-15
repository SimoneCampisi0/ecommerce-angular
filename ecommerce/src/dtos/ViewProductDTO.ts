import {PhotoDTO} from "./PhotoDTO";
import {AbstractProductDTO} from "./abstract/AbstractProductDTO";

export class ViewProductDTO extends AbstractProductDTO {
  firstPhotoResponse: PhotoDTO

  colorsResponse: string[]

  constructor(idProduct: number,

  productName: string,

  productDesq: string,

  productCost: number,

  productQuantity: number,

  available: boolean,

  codSeller: number,

  firstPhotoResponse: PhotoDTO,

  colorsResponse: string[]) {
    super(idProduct, productName, productDesq, productCost, productQuantity, available, codSeller)
    this.firstPhotoResponse = firstPhotoResponse
    this.colorsResponse = colorsResponse
  }
}

