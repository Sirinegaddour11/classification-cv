import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-dashboard-candidat',
  templateUrl: './dashboard-candidat.component.html',
  styleUrls: ['./dashboard-candidat.component.css']
})
export class DashboardCandidatComponent implements OnInit {
  candidatures: any
  notifs:any
  total: any
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private candidatureService: CandidatureService, private router: Router,private CandidatService:CandidatService) { }

  ngOnInit(): void {
    this.getAllCandidature()
    // this.getAllNotif()
   
  }
  getAllCandidature() {
    this.candidatureService.getcanidatCandidature(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.candidatures = res
        console.log("candidatures", this.candidatures)

      })
  }
  // getAllNotif() {
  //   this.CandidatService.getAllNotif().subscribe(
  //     (res: any) => {
  //       this.notifs =  res.filter((element: any) => (element.candidature.candidat.iduser == this.userconnect.iduser))
  //       console.log("notifications", this.notifs)
  //     })
  // }

  totalCandidatures() {
    let total = 0
    this.candidatures.forEach((element: any) =>
      total = total + 1
    )
    return total
  }
  // totalCandidatures2() {
  //   this.total= this.candidatures.length
  //   return this.candidatures.length
  // }
  
}
