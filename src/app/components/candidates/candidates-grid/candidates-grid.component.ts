import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-candidates-grid',
  templateUrl: './candidates-grid.component.html',
  styleUrls: ['./candidates-grid.component.css']
})
export class CandidatesGridComponent implements OnInit {
  candidat : any
  city : any
  constructor(private candidatService :CandidatService, private offreService :OffreService) { }

  ngOnInit(): void {
    this.getAllcandidat();

    let id: any
    this.offreService.getCity(id).subscribe(data => {
      this.city = data;
    })
  }
  getAllcandidat() {
    this.candidatService.getAllCandidat().subscribe(
      (res: any) => {
        this.candidat = res
        console.log("candidat", this.candidat)
      })
  }
}
