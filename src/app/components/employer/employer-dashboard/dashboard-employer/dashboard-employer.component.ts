import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OffreService } from 'src/app/services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-employer',
  templateUrl: './dashboard-employer.component.html',
  styleUrls: ['./dashboard-employer.component.css']
})
export class DashboardEmployerComponent implements OnInit {
  candidatures: any
  candidaturesA: any
  candidaturesR: any
  candidature: any
  formCanidature: FormGroup
  offers: any
  currentId: any
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private offreService: OffreService, private canidatureService: CandidatureService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCandidatures()
    this.getCandidaturesRejected()
    this.getAcceptedCandidatures()
    this.getAllJob()
    this.formCanidature = this.formBuilder.group({
      dateEntretien: ['', Validators.required],
      lien: ['', Validators.required]
    })

  }
  deleteoffre(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.offreService.deleteOffer(id).subscribe(
          (res: any) => {
            console.log("deleted !")
            this.getAllJob();
          }
        )
        Swal.fire(
          'Deleted!',
          'Your job has been deleted.',
          'success'
        )
      }
    })
  }
  getId(id: any) {
    this.currentId = id
    console.log('id taked :',this.currentId)
  }
  acceptCandidature() {
    this.canidatureService.acceptCandidature(this.formCanidature.value, this.currentId).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          text: 'Candidature accepted !'
        })
        this.getAcceptedCandidatures()
        this.getCandidatures()
        this.getAllJob()
      }
    )
  }
  refuseCandidature(candidature: any, id: any) {
    this.canidatureService.refuseCandidature(candidature, id).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          text: 'Candidature rejected !'
        })
        this.getCandidaturesRejected()
        this.getCandidatures()
        this.getAllJob()
      }
    )
  }
  getAllJob() {
    this.offreService.getAlloffer().subscribe(
      (res: any) => {
        this.offers = res.filter((element: any) => element.societe.iduser == this.userconnect.iduser)
        console.log("offers", this.offers)
      })
  }
  getCandidatures() {
    this.canidatureService.getSocieteCandidature(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.candidatures = res.filter((elem: any) => elem.accepted == false && elem.status == 'Non vue')
        console.log('les candidatures :', this.candidatures)
      }
    )
  }
  getAcceptedCandidatures() {
    this.canidatureService.getSocieteCandidature(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.candidaturesA = res.filter((elem: any) => elem.accepted == true)
        console.log('les candidatures acceptées :', this.candidaturesA)
      }
    )
  }
  getCandidaturesRejected() {
    this.canidatureService.getSocieteCandidature(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.candidaturesR = res.filter((elem: any) => elem.accepted == false && elem.status == 'Rejected')
        console.log('les candidatures refusées:', this.candidaturesR)
      }
    )
  }
}
