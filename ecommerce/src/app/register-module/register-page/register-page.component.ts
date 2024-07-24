import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {CreateUserRequest} from "../../../dtos/CreateUserRequest";
import {Router} from "@angular/router";
import {CreateLuogoResidenzaRequest} from "../../../dtos/CreateLuogoResidenzaRequest";
import {CreateAnagraficaRequest} from "../../../dtos/CreateAnagraficaRequest"
import Swal from 'sweetalert2'
import {SessoEnum} from "../../../dtos/enums/sesso.enum";


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
    nome: new FormControl(null, Validators.required),
    cognome: new FormControl(null, Validators.required),
    dataNascita: new FormControl(null, Validators.required),
    sesso: new FormControl(null, Validators.required),
    comune: new FormControl(null, Validators.required),
    stato: new FormControl(null, Validators.required),
    provincia: new FormControl(null, Validators.required),
    indirizzo: new FormControl(null, Validators.required),
    civico: new FormControl(null, Validators.required),
    cap: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });


  constructor(private router: Router, private authService: AuthService) {
  }

  checkFormWithoutEmailPassword() {
    for (let controlName in this.registerForm.controls) {
      if (this.registerForm.controls.hasOwnProperty(controlName) && controlName !== 'email' && controlName !== 'password') {
        if (!this.registerForm.get(controlName)?.valid) { //Se esiste almeno un campo non valido, ritorna false
          return false;
        }
      }
    }
    return true; //Altrimenti ritorna true
  }


  checkRegister() {
    if (!this.checkFormWithoutEmailPassword()) {
      Swal.fire({
        icon: "error",
        title: "Dati non validi",
        text: "Inserisci correttamente i dati."
      });
    } else {
      let luogoResidenzaRequest = new CreateLuogoResidenzaRequest(
        this.registerForm.value.stato || "",
        this.registerForm.value.provincia || "",
        this.registerForm.value.comune || "",
        this.registerForm.value.indirizzo || "",
        this.registerForm.value.civico || "",
        this.registerForm.value.cap || "",
      )

      const dateObject = new Date(this.registerForm.value.dataNascita || "");
      const day = dateObject.getDate() < 10 ? "0" + dateObject.getDate() : dateObject.getDate();
      const month = dateObject.getMonth() + 1 < 10 ? "0" + (dateObject.getMonth() + 1) : dateObject.getMonth();
      const year = dateObject.getFullYear();
      let formattedDate = `${year}-${month}-${day}`;

      this.anagraficaRequest = new CreateAnagraficaRequest(
        this.registerForm.value.nome || "",
        this.registerForm.value.cognome || "",
        formattedDate,
        // SessoEnumBuilder(this.registerForm.value.sesso || ""),
        this.registerForm.value.sesso || "",

        luogoResidenzaRequest)

      this.fase = 1
    }
  }

  onRegister() {
    let request = new CreateUserRequest(this.registerForm.value.email || "", this.registerForm.value.password || "", this.anagraficaRequest)

    this.authService.register(request).subscribe({
      next: (response) => {
        localStorage.setItem('currentUser', JSON.stringify(response))
      },
      error: (error) => {
        Swal.fire({
          icon: "error",
          title: "Dati non validi",
          text: "Si è verificato il seguente errore: " + error.text.toString()
        });

      },
      complete: () => {
        this.router.navigate(['home'])
      }
    })
  }

  protected readonly Object = Object;
  protected readonly SessoEnum = SessoEnum;
}
