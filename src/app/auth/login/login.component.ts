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
// authentication call
  authcall(){
      this.http.get<any>('http://localhost:3000/users')
      .subscribe((data)=>{
      const user = data.find((a:any)=>{
         return a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="admin" 
        })
        const users = data.find((a:any)=>{        
      return a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="user"
    })
        const userid = data.find((a:any)=>{        
        return a.id
    })
     if(user){
       this.authservice.auth('admin')
       this.toast.success('login successfull with admin ',userid);
       sessionStorage.setItem('user','admin')  
       this.loginForm.reset()
      window.location.reload();  
      }
     else if(users){
      this.authservice.auth('user')
      this.toast.success('login successfull with users')
      sessionStorage.setItem('user','user')
      this.loginForm.reset()
      window.location.reload();
     }else{
      this.toast.error('user not found')
     }
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
