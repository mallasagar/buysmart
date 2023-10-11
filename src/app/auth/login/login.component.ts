import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { authenticationService  } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private http:HttpClient, private authservice:authenticationService,private toast: ToastrService,private router:Router){
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      loginemail: new FormControl(null, [Validators.required, Validators.email]),
      loginpassword: new FormControl(null, Validators.required),
    })
  }

  authcall(){
      this.http.get<any>('http://localhost:3000/users')
      .subscribe((data)=>{
      const user = data.find((a:any)=>{
      return a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="admin"
    })
      const users = data.find((a:any)=>{
      return a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="user"
    })
     if(user){
       this.router.navigate(['/admin'])
        this.toast.success('login successfull with admin')
        this.loginForm.reset()
     }else{
     if(users){
       this.router.navigate(['/'])
        this.toast.success('login successfull with users')
        this.loginForm.reset()
     }else{
      this.toast.error('user not found')
     }}
   })
  }
  onLogin(){
    if(this.loginForm.valid){
      this.authcall()      
    }
    else{
      this.toast.error('fill up the form.')
    }
  }
}
