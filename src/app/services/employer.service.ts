import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http:HttpClient) { }

  getAllSociete(){
    return this.http.get(`${environment.BackUrl}/users/Societe/get`)
  }

  updateSociete (societe:any,id: any,id_category:any ){
    return this.http.put(`${environment.BackUrl}/users/Societe/update/${id}/${id_category}`,societe)}
    
  updateImage(societe:any,id: any){
    return this.http.put(`${environment.BackUrl}/users/Societe/updateimage/${id}`,societe)}

  updateAdress(societe: any, id: any, id_city: any) {
    return this.http.put(`${environment.BackUrl}/users/Societe/updateadress/${id}/${id_city}`, societe)}

  getsocieteById(id : any) {
    return this.http.get(`${environment.BackUrl}/users/Societe/getone/${id}`)
  }
    getAllCity() {
    return this.http.get(`${environment.BackUrl}/users/city/get`)
  }

  getAllCountry() {
    return this.http.get(`${environment.BackUrl}/users/country/get`)
  }

  getAllState() {
    return this.http.get(`${environment.BackUrl}/users/state/get`)
  }
  getCity(idcity : any) {
    return this.http.get(`${environment.BackUrl}/users/city/getone/${idcity}`)
  }
  getAllCategorie() {
    return this.http.get(`${environment.BackUrl}/users/categorie/get`)
  }
}
