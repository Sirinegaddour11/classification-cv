import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OffreService } from 'src/app/services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-candidates',
  templateUrl: './manage-candidates.component.html',
  styleUrls: ['./manage-candidates.component.css']
})
export class ManageCandidatesComponent implements OnInit {
  candidatures: any
  offers:any
  candidaturesR: any
  candidature: any
  id: any
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private candidatureService: CandidatureService, private router: Router, private activatedRoute: ActivatedRoute,private offreService:OffreService) { }

  ngOnInit(): void {
    this.getAlloffer()
    this.getCandidatures()
  }

  acceptCandidature(candidature: any, id: any) {
    this.candidatureService.acceptCandidature(candidature, id).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          text: 'Candidature accepted !'
        })
        this.getCandidatures()
        this.getAlloffer()
      }
    )
  }
  refuseCandidature(candidature: any, id: any) {
    this.candidatureService.refuseCandidature(candidature, id).subscribe(
      (res: any) => {
        Swal.fire({
          icon: 'success',
          text: 'Candidature refusé !'
        })
        this.getCandidatures()
        this.getAlloffer()

      }
    )
  }
  getAlloffer() {
    this.offreService.getAlloffer().subscribe(
      (res: any) => {
        this.offers = res.filter((element: any) => element.societe.iduser == this.userconnect.iduser)
        console.log("offers", this.offers)
      })
  }
  getCandidatures() {
    this.candidatureService.getoffreCandidature(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.candidatures = res.filter((elem: any) => elem.accepted == true && elem.status == 'Accepted')
        console.log('les candidatures :', this.candidatures)
      }
    )
  }

}
