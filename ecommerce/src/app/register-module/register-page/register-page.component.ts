import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {CreateUserRequest} from "../../../dtos/CreateUserRequest";
import {Router} from "@angular/router";
import {CreateLuogoResidenzaRequest} from "../../../dtos/CreateLuogoResidenzaRequest";
import {CreateAnagraficaRequest} from "../../../dtos/CreateAnagraficaRequest";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  fase: number = 0

  //@ts-ignore
  anagraficaRequest: CreateAnagraficaRequest

  registerForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    dataNascita: new FormControl('', Validators.required),
    comune: new FormControl('', Validators.required),
    stato: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    indirizzo: new FormControl('', Validators.required),
    civico: new FormControl('', Validators.required),
    CAP: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });


  constructor(private router: Router, private authService: AuthService) {}


  checkRegister() {
    // if(!this.registerForm0.valid) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Dati non validi",
    //     text: "Inserisci correttamente i dati."
    //   });
    // }
    // else {
    //   this.fase = 1
    // }

    let luogoResidenzaRequest = new CreateLuogoResidenzaRequest(
      this.registerForm.value.stato || "",
      this.registerForm.value.provincia || "",
      this.registerForm.value.comune || "",
      this.registerForm.value.indirizzo || "",
      this.registerForm.value.civico || "",
      this.registerForm.value.CAP || "",
    )


    let anagraficaRequest: CreateAnagraficaRequest = new CreateAnagraficaRequest(
      this.registerForm.value.nome || "",
      this.registerForm.value.cognome || "",
            new Date(this.registerForm.value.dataNascita || ""),
            luogoResidenzaRequest)

    this.fase = 1
    this.anagraficaRequest = anagraficaRequest
  }

  onRegister() {
    let request = new CreateUserRequest(this.registerForm.value.email || "", this.registerForm.value.password || "", this.anagraficaRequest)

    console.log(request)

    this.authService.register(request).subscribe({
      next: (response) => {
        localStorage.setItem('currentUser', JSON.stringify(response))
      },
      error: (error) => {
        console.log("error: "+error.toString())
      },
      complete: () => {
        this.router.navigate(['home'])
      }
    })
  }

}
