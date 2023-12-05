import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {CreateUserRequest} from "../../../dtos/CreateUserRequest";
import {Router} from "@angular/router";
import Swal from 'sweetalert2'
import {CreateLuogoResidenzaRequest} from "../../../dtos/CreateLuogoResidenzaRequest";
import {Provincia} from "../../../dtos/enums/Provincia";
import {Stato} from "../../../dtos/enums/Stato";
import {CreateAnagraficaRequest} from "../../../dtos/CreateAnagraficaRequest";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  fase: number = 0

  registerForm0 = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    dataNascita: new FormControl('', Validators.required),
    comune: new FormControl('', Validators.required),
    stato: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    indirizzo: new FormControl('', Validators.required),
    civico: new FormControl('', Validators.required),
    CAP: new FormControl('', Validators.required),

  });

  registerForm1: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private router: Router, private authService: AuthService) {}

  convertiStatoEnum(valore: string): Stato {
    return Stato[valore as keyof typeof Stato]
  }

  convertiProvinciaoEnum(valore: string): Provincia {
    return Provincia[valore as keyof typeof Provincia]
  }


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

    console.log(this.registerForm0.value)

    let luogoResidenzaRequest = new CreateLuogoResidenzaRequest(
      this.convertiStatoEnum(this.registerForm0.value.stato || ""),
      this.convertiProvinciaoEnum(this.registerForm0.value.provincia || ""),
      this.registerForm0.value.comune || "",
      this.registerForm0.value.indirizzo || "",
      this.registerForm0.value.civico || "",
      this.registerForm0.value.CAP || "",
    )

    let anagraficaRequest: CreateAnagraficaRequest = new CreateAnagraficaRequest(
      this.registerForm0.value.nome || "",
      this.registerForm0.value.cognome || "",
            new Date(this.registerForm0.value.dataNascita || ""),
            luogoResidenzaRequest)

    this.fase = 1



    this.onRegister(anagraficaRequest)
  }

  onRegister(anagraficaRequest: CreateAnagraficaRequest) {
    let request = new CreateUserRequest(this.registerForm1.value.email, this.registerForm1.value.password, anagraficaRequest)

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

  protected readonly Object = Object;
  protected readonly Provincia = Provincia;
  protected readonly Object1 = Object;
  protected readonly Stato = Stato;
}
