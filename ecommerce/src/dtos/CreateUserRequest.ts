import {AbstractUserDTO} from "./abstract/AbstractUserDTO";
import {CreateAnagraficaRequest} from "./CreateAnagraficaRequest";

export class CreateUserRequest extends AbstractUserDTO {

  anagraficaRequest: CreateAnagraficaRequest

  constructor(email: string, password: string, anagraficaRequest: CreateAnagraficaRequest) {
    super(email, password);
    this.anagraficaRequest = anagraficaRequest
  }
}
