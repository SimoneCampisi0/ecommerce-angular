import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {RegisterDTO} from "../../../dtos/RegisterDTO";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(private authService: AuthService) {}
  onRegister() {
    console.log(this.registerForm.value)
    let request = new RegisterDTO(this.registerForm.value.email, this.registerForm.value.password)

    this.authService.register(request).subscribe(
      response => {
        console.log("response: "+response)
      }
    )
  }
}
