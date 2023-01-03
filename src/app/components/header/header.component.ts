import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formLogin: FormGroup
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)

  connect: boolean = true
  constructor(private router: Router, private Service: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.check()
  }
  getFormLogin() {
    this.formLogin = this.formBuilder.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  check() {
    if (this.state == "1") {
      this.connect = true
    } else {
      this.connect = false
    }
    console.log('connect', this.connect)
  }
  onLogout() {
    Swal.fire('Logout !!')
    localStorage.clear()
    this.router.navigateByUrl('/login')
    this.connect = false

  }
  // onLogin() {
  //   this.Service.Login(this.formLogin.value).subscribe(
  //     (res: any) => {
  //       console.log(res)
  //       if (res.user.enabled === true) {
  //         this.connect = true
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Welcome :D!',
  //         })
  //         this.router.navigateByUrl('/')
  //         localStorage.setItem('userconnect', JSON.stringify(res.user))
  //         localStorage.setItem('token', res.access_token)
  //         localStorage.setItem("state", "1")
  //         window.location.reload()
  //       } else {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Login Error',
  //           text: 'username or password invalid',
  //         })
  //       }
  //     }
  //   )
  // }
}
