import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/employer.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-employer-grid',
  templateUrl: './employer-grid.component.html',
  styleUrls: ['./employer-grid.component.css']
})
export class EmployerGridComponent implements OnInit {
  city : any
  term:string
  societes : any
    userconnect = JSON.parse(localStorage.getItem('userconnect')!)
    state = JSON.parse(localStorage.getItem('state')!)
  constructor(private employerService :EmployerService, private offreService:OffreService) { }

  ngOnInit(): void {
    this.getAllsociete();
    let idcity: any
    this.offreService.getCity(idcity).subscribe(data => {
      this.city = data;
    })
  }
  getAllsociete() {
    this.employerService.getAllSociete().subscribe(
      (res: any) => {
        this.societes = res
        console.log("societes", this.societes)
      })}
}
