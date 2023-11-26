import {AbstractUserDTO} from "./AbstractUser/AbstractUserDTO";

export class CreateUserRequest extends AbstractUserDTO {
  constructor(email: string, password: string) {
    super(email, password);
  }
}
