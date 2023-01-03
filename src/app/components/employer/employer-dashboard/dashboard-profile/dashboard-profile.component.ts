import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.css']
})
export class DashboardProfileComponent implements OnInit {
  fileToUpload: Array<File> = [];
  employer: any
  statess: any
  citys: any
  categories: any
  formImage: FormGroup
  formAdress: FormGroup
  id = this.ativateRoute.snapshot.params['id']
  formEmployer: FormGroup
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private formBuilder:FormBuilder,private employerService:EmployerService, private ativateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getsocieteById()
    this.getAllCity()
    this.getAllCategorie()
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
    this.formEmployer = this.formBuilder.group({
      iduser: ['', Validators.required],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      description: ['', Validators.required],
      mailuser: ['', Validators.required],
      phone: ['', Validators.required],
      linkedin: ['', Validators.required],
      since: ['', Validators.required],
      companyname: ['', Validators.required],
      domaine: ['', Validators.required],
      siteweb: ['', Validators.required],
      id_city: ['', Validators.required],
      id_category: ['', Validators.required],
      

    })
    this.formAdress.patchValue({
      adresse: this.userconnect.adresse,
      id_city: this.userconnect.id_city
    })
    this.FormValue()

  }
  getsocieteById() {
    this.employerService.getsocieteById(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.employer = res
        console.log("employer", this.employer)
      })
  }
  updateSociete() {
    this.employerService.updateSociete(this.formEmployer.value,this.userconnect.iduser,this.formEmployer.value.id_category).subscribe(
      (res: any) => {
        console.log(res)
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        window.location.reload()

        Swal.fire(
          'updated !', 'success'
        )
        this.getsocieteById()
      })
  }
  updateAdress() {
    this.employerService.updateAdress(this.formAdress.value, this.userconnect.iduser, this.formAdress.value.id_city).subscribe(
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
  getAllSociete() {
    this.employerService.getAllSociete().subscribe(
      (res: any) => {
        this.employer = res
        console.log("employers", this.employer)
      })
  }
  updateImage() {
    let formData = new FormData();
    formData.append("file", this.fileToUpload[0]);
    this.employerService.updateImage(formData, this.userconnect.iduser).subscribe(
      (res: any) => {
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        window.location.reload()
        this.getAllSociete()
        Swal.fire({
          icon: 'success',
          title: 'image updated !'
        })

      }
    )
  }

  FormValue() {
    this.formEmployer.patchValue({
     
      username: this.userconnect.username,
      companyname: this.userconnect.companyname,
      firstName: this.userconnect.firstName,
      lastName: this.userconnect.lastName,
      description: this.userconnect.description,
      mailuser: this.userconnect.mailuser,
      phone: this.userconnect.phone,
      linkedin: this.userconnect.linkedin,
      since: this.userconnect.since,
      domaine: this.userconnect.domaine,
      siteweb: this.userconnect.siteweb,
      adresse: this.userconnect.adresse,
      id_category:this.userconnect.id_category,

    })
  }

  getAllCity() {
    this.employerService.getAllCity().subscribe(
      (res: any) => {
        this.citys = res
        console.log("city", this.citys)
      })
  }
  getAllCategorie() {
    this.employerService.getAllCategorie().subscribe(
      (res: any) => {
        this.categories = res
        console.log("Categorie", this.categories)
      })
  }
}
