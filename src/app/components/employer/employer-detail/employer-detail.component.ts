import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-employer-detail',
  templateUrl: './employer-detail.component.html',
  styleUrls: ['./employer-detail.component.css']
})
export class EmployerDetailComponent implements OnInit {
  societe: any
  city:any
  id = this.ativateRoute.snapshot.params['id']
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private EmployerService: EmployerService, private ativateRoute: ActivatedRoute,private offreService:OffreService) { }

  ngOnInit(): void {
    this.getsocieteById()
    let idcity: any
    this.offreService.getCity(idcity).subscribe(data => {
      this.city =data;
    })
  }

  getsocieteById() {
    this.EmployerService.getsocieteById(this.id).subscribe(
      (res: any) => {
        this.societe = res
        console.log("societe", this.societe)
      })
  }
}
