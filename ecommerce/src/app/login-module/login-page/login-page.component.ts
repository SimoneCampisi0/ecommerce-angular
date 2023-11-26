import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {CreateUserRequest} from "../../../dtos/CreateUserRequest";
import {Router} from "@angular/router";

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
    let request = new CreateUserRequest(this.loginForm.value.email, this.loginForm.value.password)

    this.authService.login(request).subscribe(
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
