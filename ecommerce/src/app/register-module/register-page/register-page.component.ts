import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {CreateUserRequest} from "../../../dtos/CreateUserRequest";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm = new FormGroup({ //TODO aggiungere i seguenti campi alla Register Page e verificare se funziona la visualizzazione del nome nella navbar
    nome: new FormControl(),
    cognome: new FormControl(),
    dataNascita: new FormControl(),
    comune: new FormControl(),
    paese: new FormControl(),
    cap: new FormControl(),
    indirizzo: new FormControl(),
    civico: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(private router: Router, private authService: AuthService) {}

  onRegister() {
    let request = new CreateUserRequest(this.registerForm.value.email, this.registerForm.value.password)

    this.authService.register(request).subscribe(
      response => {
        localStorage.setItem('currentUser', JSON.stringify(response))

      },
      (error) => {
        console.log("error: "+error.toString())
      },
      ()=> {
        this.router.navigate(['home'])
      }
    )
  }
}
