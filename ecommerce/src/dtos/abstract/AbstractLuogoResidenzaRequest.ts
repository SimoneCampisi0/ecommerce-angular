
export class AbstractLuogoResidenzaRequest {
  stato: string

  provincia: string

  comune: string

  indirizzo: string

  civico: string

  cap: string

  constructor(stato: string,
              provincia: string,
              comune: string,
              indirizzo: string,
              civico: string,
              cap: string) {
    this.stato = stato
    this.provincia = provincia
    this.comune = comune
    this.indirizzo = indirizzo
    this.civico = civico
    this.cap = cap
  }

}
