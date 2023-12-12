import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserResponse} from "../dtos/UserResponse";
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Ottieni la JWT dal servizio di autenticazione
    let jwt = null;

    if(localStorage.getItem('currentUser')) {
      let currentUser: UserResponse = JSON.parse(localStorage.getItem('currentUser') || "")
      jwt = currentUser.token
    }

    // Clona la richiesta originale e aggiungi l'intestazione Authorization con la JWT
    if (jwt != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`,
        }
      });
    }
    // Passa la richiesta al gestore successivo
    return next.handle(request);
  }
}
