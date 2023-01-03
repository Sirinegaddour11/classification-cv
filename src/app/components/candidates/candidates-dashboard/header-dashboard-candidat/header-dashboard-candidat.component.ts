import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-dashboard-candidat',
  templateUrl: './header-dashboard-candidat.component.html',
  styleUrls: ['./header-dashboard-candidat.component.css']
})
export class HeaderDashboardCandidatComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  connect: boolean = false
  formImage: FormGroup
  fileToUpload: Array<File> = [];
  competence:any
  score:Number=0
  constructor(private formBuilder: FormBuilder, private CandidatService: CandidatService, private ativateRoute: ActivatedRoute,private router: Router,private candidatService:CandidatService) { }

  ngOnInit(): void {
    //FORM IMAGE
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    })
    this.getAllCompetence()
  }
  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
    this.updateImage()
  }
  updateImage() {
    let formData = new FormData();
    formData.append("file", this.fileToUpload[0]);
    this.CandidatService.updateImage(formData, this.userconnect.iduser).subscribe(
      (res: any) => {
        this.userconnect = res
        localStorage.setItem("userconnect", JSON.stringify(res));
        window.location.reload()
       
        Swal.fire({
          icon: 'success',
          title: 'image updated !'
        })

      }
    )
  }
  getAllCompetence() {
    this.candidatService.getAllCompetence().subscribe(
      (res: any) => {
        let total = 0
        let nombre = 0
        this.competence = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("competence", this.competence)
        this.competence.forEach((element: any) => {
          total = total + Number(element.niveau)
          nombre = nombre +1
        }
        )
        this.score = total/nombre
        console.log('Score :',this.score ,'%')
      })
  }
  onLogout() {
    Swal.fire('Logout !!')
    localStorage.clear()
    this.router.navigateByUrl('/login')
    this.connect = false
  }
}
