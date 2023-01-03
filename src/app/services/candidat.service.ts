import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) { }
  
  getAllCandidat() {
    return this.http.get(`${environment.BackUrl}/users/candidat/get`)
  }

  getCandidatById(id: any) {
    return this.http.get(`${environment.BackUrl}/users/candidat/getone/${id}`)
  }
  updateEducation(education:any, id:any,id_user:any){
    return this.http.put(`${environment.BackUrl}/users/education/update/${id}/${id_user}`, education)
  }

  updateCandidat(candidat: any, id: any) {
    return this.http.put(`${environment.BackUrl}/users/candidat/update/${id}`, candidat) }

  updateImage(candidat: any, id: any) {
    return this.http.put(`${environment.BackUrl}/users/candidat/updateimage/${id}`, candidat)}

  updateAdress(candidat: any, id: any, id_city: any) {
    return this.http.put(`${environment.BackUrl}/users/candidat/updateadress/${id}/${id_city}`, candidat)}

  getOneEducation(id: any) {
    return this.http.get(`${environment.BackUrl}/users/education/getone/${id}`)
  }
  getAllEducation() {
    return this.http.get(`${environment.BackUrl}/users/education/get`)
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
  saveEtucation(education:any)
  {
    return this.http.put(`${environment.BackUrl}/users/education/save/`,education)
  }
  addEducation(education:any, iduser:any) {
    
    return this.http.post(`${environment.BackUrl}/users/education/add/${iduser}`,education)
  }

  deleteEducation( id:any){
    return this.http.delete(`${environment.BackUrl}/users/education/delete/${id}`)
  }
//ex
  getAllExperience() {
    return this.http.get(`${environment.BackUrl}/users/experience/get`)
  }
  getOneExperience(id: any) {
    return this.http.get(`${environment.BackUrl}/users/experience/getone/${id}`)
  }
  deleteExperience( id:any){
    return this.http.delete(`${environment.BackUrl}/users/experience/delete/${id}`)
  }
  saveExperience(experience:any)
  {
    return this.http.put(`${environment.BackUrl}/users/experience/save/`,experience)
  }
  addExperience(experience:any, iduser:any) {
    
    return this.http.post(`${environment.BackUrl}/users/experience/add/${iduser}`,experience)
  }
  updateExperience(experience:any,id:any,id_user:any){
    return this.http.put(`${environment.BackUrl}/users/experience/update/${id}/${id_user}`,experience)
  }
  //com
  getAllCompetence() {
    return this.http.get(`${environment.BackUrl}/users/competence/get`)
  }
  getOnCompetence(id: any) {
    return this.http.get(`${environment.BackUrl}/users/competence/getone/${id}`)
  }
  deleteCompetence( id:any){
    return this.http.delete(`${environment.BackUrl}/users/competence/delete/${id}`)
  }
  saveCompetence(competence:any)
  {
    return this.http.put(`${environment.BackUrl}/users/competence/save/`,competence)
  }
  addCompetence(competence:any, iduser:any) {
    
    return this.http.post(`${environment.BackUrl}/users/competence/add/${iduser}`,competence)
  }
  updateCompetence(competence:any,id:any,id_user:any){
    return this.http.put(`${environment.BackUrl}/users/competence/update/${id}/${id_user}`,competence)
  }
  //lang
  getAllLangage() {
    return this.http.get(`${environment.BackUrl}/users/langage/get`)
  }
  getOnLangage(id: any) {
    return this.http.get(`${environment.BackUrl}/users/langage/getone/${id}`)
  }
  deleteLangage( id:any){
    return this.http.delete(`${environment.BackUrl}/users/langage/delete/${id}`)
  }
  saveLangage(langage:any)
  {
    return this.http.put(`${environment.BackUrl}/users/langage/save/`,langage)
  }
  addLangage(langage:any, iduser:any) {
    
    return this.http.post(`${environment.BackUrl}/users/langage/add/${iduser}`,langage)
  }
  updateLangage(langage:any,id:any,id_user:any){
    return this.http.put(`${environment.BackUrl}/users/langage/update/${id}/${id_user}`,langage)
  }
  ///
  getAllJobSaved() {
    return this.http.get(`${environment.BackUrl}/users/jobsaved/get`)
  }
  addJobSaved(JobSaved:any,iduser:any,idoffer:any) {
    
    return this.http.post(`${environment.BackUrl}/users/jobsaved/save/${iduser}/${idoffer}`,JobSaved)
  }

  updateCV(candidat:any,id_user:any){
    return this.http.put(`${environment.BackUrl}/users/candidat/updatecv/${id_user}`,candidat)
  }
  //notif
  getAllNotif()
  {
    return this.http.get(`${environment.BackUrl}/users/notification/get`)
  }
}
