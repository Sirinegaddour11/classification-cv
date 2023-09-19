import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-a-job',
  templateUrl: './post-a-job.component.html',
  styleUrls: ['./post-a-job.component.css']
})
export class PostAJobComponent implements OnInit {
  formOffer:FormGroup
  offre: any
  citys: any
  categories: any
  fileToUplod: Array<File> = [];
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private formBuilder: FormBuilder, private offreService: OffreService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCity()
    this.getAllCategorie()
    this.formOffer = this.formBuilder.group(
      {
        //idoffer: ['', Validators.required],
        titleoffer: ['', Validators.required],
        descriptionoffer: ['', Validators.required],
        salary: ['', Validators.required],
        datelimite: ['', Validators.required],
        profil: ['', Validators.required],
        experience: ['', Validators.required],
        logo: ['', Validators.required],
        contract_type: ['', Validators.required],
        email: ['', Validators.required],
        duree: ['', Validators.required],
        currency: ['', Validators.required],
        adress: ['', Validators.required],
        skill: ['', Validators.required],
        id_city: ['', Validators.required],
        id_category: ['', Validators.required],
      })}

  // addOffer() {
  //   this.offreService.saveOffer(this.formOffer.value).subscribe(
  //     (res: any) => {
  //       console.log(res)
  //       this.formOffer.reset()
  //       Swal.fire('aadded', 'succes')
  //     })}

  addOffer2() {
    this.offreService.addOffer(this.formOffer.value, this.formOffer.value.id_category,this.formOffer.value.id_city, this.formOffer.value.id_societe).subscribe(
      (res: any) => {
        console.log(res)
        this.formOffer.reset()
        Swal.fire('aadded', 'succes')

      })  }
  handleFileInput(files: any) {
    this.fileToUplod = <Array<File>>files.target.files;
       console.log(this.fileToUplod)
  }
  addOffer3() {
    let formData = new FormData();
    formData.append("titleoffer", this.formOffer.value.titleoffer);
    formData.append("description", this.formOffer.value.description);
    formData.append("salary", this.formOffer.value.salary);
    formData.append("datelimite", this.formOffer.value.datelimite);
    formData.append("profil", this.formOffer.value.profil);
    formData.append("experience", this.formOffer.value.experience);
    formData.append("contract_type", this.formOffer.value.contract_type);
    formData.append("email", this.formOffer.value.email);
    formData.append("duree", this.formOffer.value.duree);
    formData.append("currency", this.formOffer.value.currency);
    formData.append("adress", this.formOffer.value.adress);
    formData.append("skill", this.formOffer.value.skill);
    formData.append("id_category", this.formOffer.value.id_category);
    formData.append("id_city", this.formOffer.value.id_city);
    formData.append("file", this.fileToUplod[0]);
    this.offreService.addOffer(formData, this.userconnect.iduser, this.formOffer.value.id_category, this.formOffer.value.id_city).subscribe(
      (res: any) => {
        this.offre = res;
        console.log("offer", this.offre)
        Swal.fire({
          icon: 'success',
          title: 'offer add',
        })
        this.router.navigateByUrl('/') } )  }
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
