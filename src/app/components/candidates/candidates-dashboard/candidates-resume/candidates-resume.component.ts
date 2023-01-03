import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidates-resume',
  templateUrl: './candidates-resume.component.html',
  styleUrls: ['./candidates-resume.component.css']
})
export class CandidatesResumeComponent implements OnInit {
  formEdu: FormGroup
  formExp: FormGroup
  formskill: FormGroup
  formlang: FormGroup
  education: any
  experience: any
  skill: any
  lang: any
  id: any
  submitted: boolean = false
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private formBuilder: FormBuilder, private CandidatService: CandidatService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEducation()
    this.getAllExperience()
    this.getAllCompetence()
    this.getAllLangage()
    //FORM EDUCATION
    this.formEdu = this.formBuilder.group(
      {
        certificat: ['', Validators.required],
        datedebut: ['', Validators.required],
        datefinale: ['', Validators.required],
        faculte: ['', Validators.required],
      })

    //FORM experience
    this.formExp = this.formBuilder.group(
      {
        entreprise: ['', Validators.required],
        poste: ['', Validators.required],
        description: ['', Validators.required],
        ddebut: ['', Validators.required],
        dfinal: ['', Validators.required],

      })
    //FORM skills
    this.formskill = this.formBuilder.group(
      {
        title: ['', Validators.required],
        niveau: ['', [Validators.max(100),Validators.required]],
      })
    //FORM lang
    this.formlang = this.formBuilder.group(
      {
        title: ['', Validators.required],
        niveau: ['', Validators.required],
      })

  }


  get f() { return this.formskill.controls }
  //VALUE EDUCATION
  FormValue(education: any) {
    this.formEdu.patchValue({
      certificat: education.certificat,
      datedebut: education.datedebut,
      datefinale: education.datefinale,
      faculte: education.faculte,
    })
  }

  //VALUE experience
  FormValuexp(experience: any) {
    this.formExp.patchValue({
      poste: experience.poste,
      entreprise: experience.entreprise,
      ddebut: experience.ddebut,
      dfinal: experience.dfinal,
      description: experience.description,

    })
  }
  //VALUE SKILL
  FormValueSkill(skill: any) {
    this.formskill.patchValue({
      title: skill.title,
      niveau: skill.niveau,

    })
  }
  //VALUE lang
  FormValueLang(lang: any) {
    this.formlang.patchValue({
      title: lang.title,
      niveau: lang.niveau,

    })
  }

  //CRUD experience
  updateExperience(id: any) {
    this.CandidatService.updateExperience(this.formExp.value, id, this.userconnect.iduser).subscribe(
      (res: any) => {
        console.log(res)
        Swal.fire('experience  updated !', 'success')
        this.getAllExperience()
      })
  }
  addExperience() {

    this.CandidatService.addExperience(this.formExp.value, this.userconnect.iduser).subscribe(
      (res: any) => {
        console.log(res)
        this.formEdu.reset()
        Swal.fire('aadded', 'succes')
        this.getAllExperience()
      })
  }
  getAllExperience() {
    this.CandidatService.getAllExperience().subscribe(
      (res: any) => {
        this.experience = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("experience", this.experience)
      })
  }
  getOneExperience() {
    this.CandidatService.getOneExperience(this.id).subscribe(
      (res: any) => {
        this.experience = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("experience", this.experience)
      })
  }
  deleteExperience(id: any) {
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

        this.CandidatService.deleteExperience(id).subscribe(
          (res: any) => {
            console.log("deleted !")
            this.getAllExperience()
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

  //CRUD EDUCATION
  updateEducation(id: any) {
    this.CandidatService.updateEducation(this.formEdu.value, id, this.userconnect.iduser).subscribe(
      (res: any) => {
        console.log(res)
        Swal.fire('education  updated !', 'success')
        this.getAllEducation()
      })
  }
  addEducation() {
    this.CandidatService.addEducation(this.formEdu.value, this.userconnect.iduser).subscribe(
      (res: any) => {
        console.log(res)
        this.formEdu.reset()
        Swal.fire('aadded', 'succes')
        this.getAllEducation()
      })
  }
  getAllEducation() {
    this.CandidatService.getAllEducation().subscribe(
      (res: any) => {
        this.education = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("education", this.education)
      })
  }
  getOneEducation() {
    this.CandidatService.getOneEducation(this.id).subscribe(
      (res: any) => {
        this.education = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("education", this.education)
      })
  }
  deleteEducation(id: any) {
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

        this.CandidatService.deleteEducation(id).subscribe(
          (res: any) => {
            console.log("deleted !")
            this.getAllEducation()
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

  //CRUD SKILL
  updateCompetence(id: any) {
    this.CandidatService.updateCompetence(this.formskill.value, id, this.userconnect.iduser).subscribe(
      (res: any) => {
        console.log(res)
        Swal.fire('skill  updated !', 'success')
        this.getAllCompetence()
      })
  }
  addCompetence() {
    this.submitted = true
    if (this.formskill.invalid) {
      return;
    } else {
      this.CandidatService.addCompetence(this.formskill.value, this.userconnect.iduser).subscribe(
        (res: any) => {
          console.log(res)
          this.formskill.reset()
          Swal.fire('aadded', 'succes')
          this.getAllCompetence()
        })
    }
  }
  getAllCompetence() {
    this.CandidatService.getAllCompetence().subscribe(
      (res: any) => {
        this.skill = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("skill", this.skill)
      })
  }
  getOnCompetence() {
    this.CandidatService.getOnCompetence(this.id).subscribe(
      (res: any) => {
        this.skill = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("skill", this.skill)
      })
  }
  deleteCompetence(id: any) {
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

        this.CandidatService.deleteCompetence(id).subscribe(
          (res: any) => {
            console.log("deleted !")
            this.getAllCompetence()
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
  //CRUD lang
  updateLangage(id: any) {
    this.CandidatService.updateLangage(this.formlang.value, id, this.userconnect.iduser).subscribe(
      (res: any) => {
        console.log(res)
        Swal.fire('lang  updated !', 'success')
        this.getAllLangage()
      })
  }
  addLangage() {
    this.CandidatService.addLangage(this.formlang.value, this.userconnect.iduser).subscribe(
      (res: any) => {
        console.log(res)
        this.formlang.reset()
        Swal.fire('aadded', 'succes')
        this.getAllLangage()
      })
  }
  getAllLangage() {
    this.CandidatService.getAllLangage().subscribe(
      (res: any) => {
        this.lang = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("lang", this.lang)
      })
  }
  getOnLangage() {
    this.CandidatService.getOnLangage(this.id).subscribe(
      (res: any) => {
        this.lang = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("lang", this.lang)
      })
  }
  deleteLangage(id: any) {
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

        this.CandidatService.deleteLangage(id).subscribe(
          (res: any) => {
            console.log("deleted !")
            this.getAllLangage()
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
}
