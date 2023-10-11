import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { authenticationService  } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [authenticationService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private http:HttpClient, private authservice:authenticationService,private toast: ToastrService){

  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      loginemail: new FormControl(null, [Validators.required, Validators.email]),
      loginpassword: new FormControl(null, Validators.required),
    })
  }

  authcall(){
      this.authservice.auth(this.loginForm.value);
      this.http.get('http://localhost:3000/users')

    .subscribe((data)=>{
      console.log(data)
    })
  }

  onLogin(){
    
    if(this.loginForm.valid){
      this.authservice.auth(this.loginForm.value);
     
      
      // const authservice= new authenticationService ()
    
      // this.authservice.auth(this.loginForm.value);
    // this.http.get('http://localhost:3000')

    // .subscribe((data)=>{
    //   console.log(data)
      
    }
    else{
      this.toast.error('User is did not matched')
    }
  }
    
}
