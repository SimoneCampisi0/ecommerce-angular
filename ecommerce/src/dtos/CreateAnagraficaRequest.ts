import {AbstractAnagraficaRequest} from "./abstract/AbstractAnagraficaRequest";
import {CreateLuogoResidenzaRequest} from "./CreateLuogoResidenzaRequest";

export class CreateAnagraficaRequest extends AbstractAnagraficaRequest {
  luogoResidenzaRequest: CreateLuogoResidenzaRequest

  constructor(nome: string,
              cognome: string,
              dataNascita: Date,
              luogoResidenzaRequest: CreateLuogoResidenzaRequest) {
    super(nome, cognome, dataNascita);
    this.luogoResidenzaRequest = luogoResidenzaRequest
  }
}
