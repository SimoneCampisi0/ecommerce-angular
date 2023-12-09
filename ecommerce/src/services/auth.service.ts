import { Injectable } from '@angular/core';
import { UserDTO } from "../dtos/UserDTO";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateUserRequest} from "../dtos/CreateUserRequest";
import {UserResponse} from "../dtos/UserResponse";
import {LoginUserRequest} from "../dtos/LoginUserRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register (request: CreateUserRequest): Observable<UserResponse> {
    return this.http.post<any>('http://localhost:8080/users/auth/register', request)
  }

  login (request: LoginUserRequest): Observable<UserResponse> {
    return this.http.post<any>('http://localhost:8080/users/auth/login', request)
  }

  getUsernameByUserId(idUser: number): Observable<String> { //TODO: aggiungere interceptor per allegare a ogni chiamata al back-end la JWT
    return this.http.get<any>('http://localhost:8080/users/auth/getUsernameByUserId?idUser='+idUser)
  }
}
