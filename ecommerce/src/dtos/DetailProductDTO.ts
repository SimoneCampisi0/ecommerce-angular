import {AbstractProductDTO} from "./abstract/AbstractProductDTO";
import {PhotoDTO} from "./PhotoDTO";

export class DetailProductDTO extends AbstractProductDTO{
  photoResponses: PhotoDTO[]

  colorsResponse: string[]

  constructor(idProduct: number,

              productName: string,

              productDesq: string,

              productCost: number,

              productQuantity: number,

              available: boolean,

              codSeller: number,

              photoResponses: PhotoDTO[],

              colorsResponse: string[]) {
    super(idProduct, productName, productDesq, productCost, productQuantity, available, codSeller)
    this.photoResponses = photoResponses
    this.colorsResponse = colorsResponse
  }
}
