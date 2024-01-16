import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {LoginUserRequest} from "../../../dtos/LoginUserRequest";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  constructor(private router: Router, private authService: AuthService) {}

  checkFormWithoutEmailAndPassword() {
    for(let controlName in this.loginForm.controls) {
      if(this.loginForm.controls.hasOwnProperty(controlName)) {
        if(!this.loginForm.get(controlName)?.valid) { //Se esiste almeno un campo non valido, ritorna false
          return false;
        }
      }
    }
    return true; //Altrimenti ritorna true
  }

  checkLogin() {
    console.log("check: "+this.checkFormWithoutEmailAndPassword())

    if(!this.checkFormWithoutEmailAndPassword()) {
      Swal.fire({
        icon: "error",
        title: "Dati non validi",
        text: "Inserisci correttamente i dati."
      });
    } else {
        this.onLogin()
    }
  }

  onLogin() {
    let request = new LoginUserRequest(this.loginForm.value.email || "", this.loginForm.value.password || "")

    this.authService.login(request).subscribe({
      next: (response) => {
        localStorage.setItem('currentUser', JSON.stringify(response))
      },

      error: (err) => {
        console.log("error: ", err)
      },

      complete: () => {
        this.router.navigate(['home'])
      }
    })
  }

  cambiaPagina(pagina: string) {
    this.router.navigate([pagina])
  }
}
