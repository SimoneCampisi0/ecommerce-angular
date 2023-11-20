export class UserDTO {
  idUser: number

  email: string

  password: string

  constructor(idUser: number, email: string, password: string) {
    this.idUser = idUser
    this.email = email
    this.password = password
  }
}
