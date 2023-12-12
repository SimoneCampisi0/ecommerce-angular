import { Injectable } from '@angular/core';
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

  getUsernameByUserId(idUser: number): Observable<string> {
    return this.http.get('http://localhost:8080/users/auth/getUsernameByUserId?idUser='+idUser, {responseType: 'text'})
  }
}
