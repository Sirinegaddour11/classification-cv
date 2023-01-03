import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OffreService } from 'src/app/services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidates-manage-jobs',
  templateUrl: './candidates-manage-jobs.component.html',
  styleUrls: ['./candidates-manage-jobs.component.css']
})
export class CandidatesManageJobsComponent implements OnInit {
  candidatures: any
  total: any
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private candidatureService: CandidatureService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCandidature()
  

  }
  deleteCandidature(id: any) {
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

        this.candidatureService.deleteCandidature(id).subscribe(
          (res: any) => {
            console.log("deleted !")
            this.getAllCandidature();
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

  getAllCandidature() {
    this.candidatureService.getcanidatCandidature(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.candidatures = res
        console.log("candidatures", this.candidatures)

      })
  }

  totalCandidatures() {
    let total = 0
    this.candidatures.forEach((element: any) =>
      total = total + 1
    )
    return total
  }
}
