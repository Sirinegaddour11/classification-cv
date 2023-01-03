import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import { CandidatureService } from 'src/app/services/candidature.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidates-profile',
  templateUrl: './candidates-profile.component.html',
  styleUrls: ['./candidates-profile.component.css']
})
export class CandidatesProfileComponent implements OnInit {
  fileToUpload: Array<File> = [];
  condidat: any

  citys: any
  categories: any
  formImage: FormGroup
  formAdress: FormGroup
  formCV:FormGroup
  id = this.ativateRoute.snapshot.params['id']
  formCondidat: FormGroup
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private formBuilder: FormBuilder, private candidatureService:CandidatureService,private CandidatService: CandidatService, private ativateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCandidatById()
    this.getAllCity()
    //FORM CV
    this.formCV = this.formBuilder.group({
      cv: ['', Validators.required],
    })
    //FORM IMAGE
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    })
    //FORM ADRESS
    this.formAdress = this.formBuilder.group({
      adresse: ['', Validators.required],
      id_city: ['', Validators.required]

    })
    //FORM CANDIDAT
    this.formCondidat = this.formBuilder.group({
      iduser: ['', Validators.required],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      description: ['', Validators.required],
      mailuser: ['', Validators.required],
      phone: ['', Validators.required],
      linkedin: ['', Validators.required],
      date_naissance: ['', Validators.required],
      gender: ['', Validators.required],
      profil:['',Validators.required]
    //  id_city: ['', Validators.required],
    })
    this.formAdress.patchValue({
      adresse: this.userconnect.adresse,
      id_city: this.userconnect.id_city
    })
    this.FormValue()

  }
  getCandidatById() {
    this.CandidatService.getCandidatById(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.condidat = res
        console.log("condidat", this.condidat)
      })
  }
  updateCandidat() {
    this.CandidatService.updateCandidat(this.formCondidat.value, this.userconnect.iduser).subscribe(
      (res: any) => {
        console.log(res)
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        window.location.reload()

        Swal.fire(
          'updated !', 'success'
        )
        this.getCandidatById()
      })
  }
  updateAdress() {
    this.CandidatService.updateAdress(this.formAdress.value, this.userconnect.iduser, this.formAdress.value.id_city).subscribe(
      (res: any) => {
        console.log(res)
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        Swal.fire(
          'adress updated !', 'success'
        )
      })
  }
  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
    this.updateImage()
  }
  handelFileInput2(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
    this.updateCv()
  }
  getAllCandidat() {
    this.CandidatService.getAllCandidat().subscribe(
      (res: any) => {
        this.condidat = res
        console.log("condidats", this.condidat)
      })
  }
  updateImage() {
    let formData = new FormData();
    formData.append("file", this.fileToUpload[0]);
    this.CandidatService.updateImage(formData, this.userconnect.iduser).subscribe(
      (res: any) => {
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        window.location.reload()
        this.getAllCandidat()
        Swal.fire({
          icon: 'success',
          title: 'image updated !'
        })

      }
    )
  }

  FormValue() {
    this.formCondidat.patchValue({
      iduser: this.userconnect.iduser,
      username: this.userconnect.username,
      firstName: this.userconnect.firstName,
      lastName: this.userconnect.lastName,
      description: this.userconnect.description,
      mailuser: this.userconnect.mailuser,
      phone: this.userconnect.phone,
      linkedin: this.userconnect.linkedin,
      date_naissance: this.userconnect.date_naissance,
      profil:this.userconnect.profil,
     //adresse: this.userconnect.adresse,
      //id_category:company.id_category,

    })
  }

  getAllCity() {
    this.CandidatService.getAllCity().subscribe(
      (res: any) => {
        this.citys = res
        console.log("city", this.citys)
      })
  }

  updateCv() {
    let formData = new FormData();
    formData.append("file", this.fileToUpload[0]);
    this.CandidatService.updateCV(formData, this.userconnect.iduser).subscribe(
      (res: any) => {
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        window.location.reload()
        Swal.fire({
          icon: 'success',
          title: 'Cv updated !'
        })

      }
    )
  }
 
}
