import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  constructor(private http:HttpClient) { }
  
  Login(loginRequet: any) {
    return this.http.post(`${environment.BackUrl}/users/login`, loginRequet)
  }
  Register(registerRequest: any) {
    return this.http.post(`${environment.BackUrl}/users/candidat/register`, registerRequest)
  }
  Register_societe( id_category: any, id_city: any, registerRequest: any) {
    return this.http.post(`${environment.BackUrl}/users/Societe/register/${id_category}/${id_city}`, registerRequest)
  
  }

}
