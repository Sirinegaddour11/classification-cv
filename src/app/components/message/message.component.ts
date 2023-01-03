import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  notifsc:any
  candidaturesA:any
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private CandidatService:CandidatService,private candidatureService:CandidatureService) { }

  ngOnInit(): void {
    this.getAllNotifc()
    this.getCandidatureA()
  }
  getAllNotifc() {
    this.CandidatService.getAllNotif().subscribe(
      (res: any) => {
        this.notifsc =  res.filter((element: any) => (element.candidature.candidat.iduser == this.userconnect.iduser))
        console.log("notificationsc", this.notifsc)
      })
  }
  // getAllNotifE() {
  //   this.CandidatService.getAllNotif().subscribe(
  //     (res: any) => {
  //       this.notifse =  res.filter((element: any) => (element.candidature.offre.societe.iduser == this.userconnect.iduser))
  //       console.log("notificationsE", this.notifse)
  //     })
  // }
  getCandidatureA() {
    this.candidatureService.getcanidatCandidature(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.candidaturesA = res.filter((element: any) => (element.candidature.offre.societe.iduser == this.userconnect.iduser))
        console.log("notificationsE", this.candidaturesA)

      })
  }
}
