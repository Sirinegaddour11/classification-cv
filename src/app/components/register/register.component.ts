import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helper/mustmatch';
import { AuthService } from 'src/app/services/auth.service';
import { OffreService } from 'src/app/services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formCandidate: FormGroup;
  formEntreprise: FormGroup;
  fileToUpload: Array<File> = [];
  formOffer: FormGroup
  offre: any
  citys: any
  submitted: boolean = false
  categories: any
  fileToUplod: Array<File> = [];
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: Router, private offreService: OffreService) { }

  ngOnInit(): void {
    this.getAllCity()
    this.getAllCategorie()
    this.formCandidate = this.formBuilder.group({
      // id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      image: ['', Validators.required],
      username: ['', Validators.required],
      mailuser: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.formEntreprise = this.formBuilder.group({
      // id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      image: ['', Validators.required],
      Companyname: ['', Validators.required],
      username: ['', Validators.required],
      mailuser: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      id_city: ['', Validators.required],
      id_category: ['', Validators.required],
      adresse: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  RegisterCandidate() {
    let formData = new FormData();
    formData.append("firstName", this.formCandidate.value.firstName);
    formData.append("lastName", this.formCandidate.value.lastName);
    formData.append("username", this.formCandidate.value.username);
    formData.append("mailuser", this.formCandidate.value.mailuser)
    formData.append("password", this.formCandidate.value.password);
    formData.append("phone", this.formCandidate.value.phone);
    formData.append("file", this.fileToUpload[0]);
    this.submitted = true
    if (this.formCandidate.invalid) {
      return;
    } else {
      this.authService.Register(formData).subscribe(
        (res: any) => {
          console.log(res)
          Swal.fire(
            'Go Login! ',
            'success'
          )
          this.route.navigateByUrl('/login')
        }
      )
    }
  }
  get f() { return this.formCandidate.controls; }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

  RegisterEntreprise() {
    let formData = new FormData();
    formData.append("firstName", this.formEntreprise.value.firstName);
    formData.append("lastName", this.formEntreprise.value.lastName);
    formData.append("username", this.formEntreprise.value.username);
    formData.append("Companyname", this.formEntreprise.value.Companyname);
    // formData.append("teamSize", this.formEntreprise.value.teamSize);
    formData.append("phone", this.formEntreprise.value.phone);
    formData.append("adresse", this.formEntreprise.value.adresse);
    // formData.append("website url", this.formEntreprise.value.websiteUrl);
    formData.append("mailuser", this.formEntreprise.value.mailuser)
    formData.append("password", this.formEntreprise.value.password);
    formData.append("id_city", this.formEntreprise.value.id_city)
    formData.append("id_category", this.formEntreprise.value.id_category)
    formData.append("file", this.fileToUpload[0]);
    this.authService.Register_societe(this.formEntreprise.value.id_category, this.formEntreprise.value.id_city, formData).subscribe(
      //this.authService.Register_societe(this.id_category,this.id_city,formData).subscribe(

      (res: any) => {
        console.log(res)
        Swal.fire(
          'Go Login! ',
          'success'
        )
        this.route.navigateByUrl('/login')
      }
    )
  }

  getAllCity() {
    this.offreService.getAllCity().subscribe(
      (res: any) => {
        this.citys = res
        console.log("city", this.citys)
      })
  }
  getAllCategorie() {
    this.offreService.getAllCategorie().subscribe(
      (res: any) => {
        this.categories = res
        console.log("categories", this.categories)
      })
  }

}
