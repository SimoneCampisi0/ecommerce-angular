
export class AbstractLuogoResidenzaRequest {
  stato: string

  provincia: string

  comune: string

  indirizzo: string

  civico: string

  CAP: string

  constructor(stato: string,
              provincia: string,
              comune: string,
              indirizzo: string,
              civico: string,
              CAP: string) {
    this.stato = stato
    this.provincia = provincia
    this.comune = comune
    this.indirizzo = indirizzo
    this.civico = civico
    this.CAP = CAP
  }

}
