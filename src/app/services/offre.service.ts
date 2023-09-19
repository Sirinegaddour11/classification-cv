import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }
  getAlloffer(){
    return this.http.get(`${environment.BackUrl}/users/offre/get`)
  }
  
  getAllCity() {
    return this.http.get(`${environment.BackUrl}/users/city/all`)
  }

  getAllCountry() {
    return this.http.get(`${environment.BackUrl}/users/country/all`)
  }

  getAllState() {
    return this.http.get(`${environment.BackUrl}/users/state/all`)
  }
  getCity(idcity : any) {
    return this.http.get(`${environment.BackUrl}/users/city/getone/${idcity}`)
  }
  getAllCategorie() {
    return this.http.get(`${environment.BackUrl}/users/category/all`)
  }
  saveOffer(offre: any) {
    return this.http.post(`${environment.BackUrl}/users/offre/save`, offre)
  }
  addOffer(offre: any, id_societe: any, id_category: any, id_city: any) {
    
    return this.http.post(`${environment.BackUrl}/users/offre/add/${id_societe}/${id_category}/${id_city}`, offre)
  }

  deleteOffer(id: any) {
    return this.http.delete(`${environment.BackUrl}/users/offre/delete/${id}`)
  }

  updateOffer(id: any, offre : any) {
    return this.http.put(`${environment.BackUrl}/users/offre/update/${id}`,offre)
  }

  getOffreById(id : any) {
    return this.http.get(`${environment.BackUrl}/users/offre/getone/${id}`)
  }

  updateImage(offre:any,id: any){
    return this.http.put(`${environment.BackUrl}/users/offre/updateimage/${id}`,offre)

  }
  checkFavoris(id_candidat:any,id_offre:any){
    return this.http.get(`${environment.BackUrl}/users/jobsaved/getcandidatf/${id_candidat}/${id_offre}`)
  }
  addComment(commentaire: any,id_user:any,id_offre:any) {
    return this.http.post(`${environment.BackUrl}/users/commentaire/add/${id_user}/${id_offre}`, commentaire)
  }
  Comments() {
    return this.http.get(`${environment.BackUrl}/users/commentaire/get`)
  }
}
