import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-dashboard-employer',
  templateUrl: './header-dashboard-employer.component.html',
  styleUrls: ['./header-dashboard-employer.component.css']
})
export class HeaderDashboardEmployerComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  connect: boolean = false
  formImage: FormGroup
  fileToUpload: Array<File> = [];
  constructor(private formBuilder: FormBuilder, private employerService: EmployerService, private ativateRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    //FORM IMAGE
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    })
  }
  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
    this.updateImage()
  }
  updateImage() {
    let formData = new FormData();
    formData.append("file", this.fileToUpload[0]);
    this.employerService.updateImage(formData, this.userconnect.iduser).subscribe(
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
  onLogout() {
    Swal.fire('Logout !!')
    localStorage.clear()
    this.router.navigateByUrl('/login')
    this.connect = false
  }
}
