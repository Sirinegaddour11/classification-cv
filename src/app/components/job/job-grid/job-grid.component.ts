import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OffreService } from 'src/app/services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector:'app-job-grid',
  templateUrl:'./job-grid.component.html',
  styleUrls: ['./job-grid.component.css']
})
export class JobGridComponent implements OnInit {
  formOffer:FormGroup
  candidature: any
  offre: any
  citys: any
  city: any
  categories: any
  id_city: any
  fileToUplod: Array<File> = [];
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private formBuilder:FormBuilder,private offreService:OffreService,private ar:ActivatedRoute,private router:Router,private candidatureService:CandidatureService) { }

  ngOnInit(): void {
    this.getAllJob();
    this.getAllCity()
    this.getAllCategorie()
    let id: any
    this.offreService.getCity(id).subscribe(data => {
      this.city = data;
    })
  }
  getAllJob() {
    this.offreService.getAlloffer().subscribe(
      (res: any) => {
        this.offre = res
        console.log("offre", this.offre)
      })
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
        console.log("categories",this.categories)
      })
  }
  OnChangeCategory(event: any) {
    console.log("detected value category ", event.target.value)
    this.offreService.getAlloffer().subscribe(
      (res: any) => {
        this.offre = res.filter((job: any) => job.categorie.titlecategorie == event.target.value)
        console.log("list of jobs", this.offre)
      })
  }
// tempArray:any =[];
// newArray:any[];
//   OnChange(event:any){
// if(event.target.checked){
//   this.offreService.getAlloffer().subscribe(
//     (res: any) => {
//       this.tempArray = res.filter((job: any) => job.categorie.titlecategorie == event.target.value)
//       this.newArray.push(this.tempArray);
//       for(let i=0;i<this.newArray.length;i++)
//       {
//         var firstArray=this.newArray[i];
//         for(let i=0;i<firstArray.length;i++ ){
//           var obj = firstArray [i]; 
//           this.offre.push(obj)
//         }
//       }
//     })
// }
//   }
  addCandidature(id_offre: any) {
   /* let formData = new FormData();
    formData.append("id_offre", this.formCandidature.value.id_offre);
    formData.append("id_candidat", this.formCandidature.value.id_candidat);*/
    this.candidatureService.addCandidature(this.candidature,id_offre,this.userconnect.id).subscribe(
      (res: any) => {
        this.candidature = res;
        console.log("candidature",this.candidature)
        Swal.fire({
          icon: 'success',
          title: 'add',
        })
        this.router.navigateByUrl('/job-grid')

      }
    )
  }
}
