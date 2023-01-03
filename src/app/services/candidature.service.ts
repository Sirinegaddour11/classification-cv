import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient) { }

  getAllCandidature() {
    return this.http.get(`${environment.BackUrl}/users/candidature/get`)
  }

  addCandidature(Candidature: any, id_offre: any, id_candidat: any) {
    return this.http.post(`${environment.BackUrl}/users/candidature/save/${id_offre}/${id_candidat}`, Candidature)
  }
  getcanidatCandidature(id_candidat: any) {
    return this.http.get(`${environment.BackUrl}/users/candidature/getcandidat/${id_candidat}`)
  }
  getoffreCandidature(id_offre: any) {
    return this.http.get(`${environment.BackUrl}/users/candidature/getoffre/${id_offre}`)
  }
  getSocieteCandidature(id_societe: any) {
    return this.http.get(`${environment.BackUrl}/users/candidature/getcsociete/${id_societe}`)
  }
 
  acceptCandidature(candidature: any, id_candidature: any) {
    return this.http.put(`${environment.BackUrl}/users/candidature/accept/${id_candidature}`, candidature)
  }
  refuseCandidature(candidature: any, id_candidature: any) {
    return this.http.put(`${environment.BackUrl}/users/candidature/reject/${id_candidature}`, candidature)
  }
  deleteCandidature(id_candidature: any) {
    return this.http.delete(`${environment.BackUrl}/users/candidature/delete/${id_candidature}`)
  }
  Score(score:any) {
    return this.http.post(`http://127.0.0.1:5000/`,score)
  }
}
