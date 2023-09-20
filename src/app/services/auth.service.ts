import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiUrl = environment.BackUrl;
@Injectable({
  providedIn: 'root'
})


export class AuthService {
    
  constructor(private http:HttpClient) { }
  
  Login(loginRequet: any) {
    return this.http.post(`${apiUrl}/users/login`, loginRequet)
  }
  Register(registerRequest: any) {
    return this.http.post(`${apiUrl}/users/candidat/register`, registerRequest)
  }
  Register_societe( id_category: any, id_city: any, registerRequest: any) {
    return this.http.post(`${apiUrl}/users/societe/register/${id_category}/${id_city}`, registerRequest)
  
  }

}
