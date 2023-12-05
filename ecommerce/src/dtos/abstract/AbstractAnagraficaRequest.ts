export class AbstractAnagraficaRequest {
  nome: string

  cognome: string

  dataNascita: Date

  constructor(nome: string,
              cognome: string,
              dataNascita: Date) {
    this.nome = nome
    this.cognome = cognome
    this.dataNascita = dataNascita
  }
}
