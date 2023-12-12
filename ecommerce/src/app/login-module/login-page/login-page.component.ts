import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {LoginUserRequest} from "../../../dtos/LoginUserRequest";

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

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    let request = new LoginUserRequest(this.loginForm.value.email, this.loginForm.value.password)

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
}
