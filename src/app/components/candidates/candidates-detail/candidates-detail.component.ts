import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.css']
})
export class CandidatesDetailComponent implements OnInit {
  candidat: any
  education:any
  experience:any
  competence:any
  lang:any
  id = this.activatedRoute.snapshot.params['id']
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.getCandidatById()
    this.getAllEducation()
    this.getAllExperience()
    this.getAllCompetence()
    this. getAllLangage()
  }
  getCandidatById() {
    this.candidatService.getCandidatById(this.id).subscribe(
      (res: any) => {
        this.candidat = res
        console.log('candidat : ', this.candidat)
      }
    ) }
  getAllEducation() {
    this.candidatService.getAllEducation().subscribe(
      (res: any) => {
        this.education = res.filter((element:any)=>(element.candidat.iduser==this.id))
        console.log("education", this.education)
      })
  }
  getAllExperience() {
    this.candidatService.getAllExperience().subscribe(
      (res: any) => {
        this.experience = res.filter((element:any)=>(element.candidat.iduser==this.id))
        console.log("experience", this.experience)
      })
  }
  getAllCompetence() {
    this.candidatService.getAllCompetence().subscribe(
      (res: any) => {
        this.competence = res.filter((element:any)=>(element.candidat.iduser==this.id))
        console.log("competence", this.competence)
      })
  }
  getAllLangage() {
    this.candidatService.getAllLangage().subscribe(
      (res: any) => {
        this.lang = res.filter((element: any) => (element.candidat.iduser ==this.id))
        console.log("lang", this.lang)
      })
  }
}