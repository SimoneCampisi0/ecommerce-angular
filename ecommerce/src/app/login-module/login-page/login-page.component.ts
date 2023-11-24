import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(service: AuthService) {}

  onLogin() {
    console.log("hello")
    console.log(this.loginForm.value)
  }
}
