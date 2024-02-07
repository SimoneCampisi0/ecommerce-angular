export class PhotoDTO {
  idPhoto: number

  url: string

  constructor(idPhoto: number, url: string) {
    this.idPhoto = idPhoto
    this.url = url
  }
}
