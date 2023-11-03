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
  loggedinuserid:number;
  user:any;
  constructor(private http:HttpClient, private authservice:authenticationService,private toast: ToastrService,private router:Router){
  } 
  ngOnInit() {
    this.loginForm = new FormGroup({
      loginemail: new FormControl(null, [Validators.required, Validators.email]),
      loginpassword: new FormControl(null, Validators.required),
    })
  }


// authcall()

  // option 3
// authentication call
  authcall(){
      this.http.get<any>('http://localhost:3000/users')
      .subscribe((data)=>{
    this.user = data.find((a:any)=>{        
    if(a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword)
       {
        //  this.authservice.auth('user')
        //  sessionStorage.setItem('user','user')
        // saving the user id 
         sessionStorage.setItem('id',a.id);
         this.loggedinuserid=a.id;
        //  saving the userexistance
         sessionStorage.setItem('Loggedin','true');
        //  checking user role if user exists
         if(a.userrole==='admin'){
            //  this.toast.success('Admin Login Successfully.')
           sessionStorage.setItem('userrole','admin')
          }
          if(a.userrole==='user'){
            //  sessionStorage.setItem('user','user')
            // this.toast.success('User Login Successfully.')
           sessionStorage.setItem('userrole','user')
         }
         this.loginForm.reset()
         window.location.reload();
        }   
      }
      )
})

}



     



    // option two for auth
    // const user = data.find((a:any)=>{        
    //   if(a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="user")
    //      {
    //        this.authservice.auth('user')
    //       //  this.toast.success('login successfull with users')
    //        sessionStorage.setItem('user','user')
    //        sessionStorage.setItem('isloggedin','user')
    //        sessionStorage.setItem('id',a.id);
    //        this.loggedinuserid=a.id;
    //        this.loginForm.reset()
    //        window.location.reload();
    //      }
    //      else if(a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="admin" ){
    //         this.authservice.auth('admin')
    //         // this.toast.success('login successful with admin')
    //         sessionStorage.setItem('user','admin')  
    //         sessionStorage.setItem('loggedinas','admin')
    //         sessionStorage.setItem('id',a.id);
    //         this.loggedinuserid=a.id;
    //         this.loginForm.reset()
    //         window.location.reload(); 
    //        }
    //     })




      // const user = data.find((a:any)=>{
      //    return a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="admin" 
      //   })




    //   const user = data.find((a:any)=>{
    //      if(a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="admin" ){
    //       this.authservice.auth('admin')
    //       this.toast.success('login successful with admin')
    //       sessionStorage.setItem('user','admin')  
    //       sessionStorage.setItem('loggedinas','admin')
    //       sessionStorage.setItem('id',a.id);
    //       this.loggedinuserid=a.id;
    //       this.loginForm.reset()
    //       window.location.reload(); 
    //      }
    //     })
    //     const users = data.find((a:any)=>{        
    //    if(a.useremail=== this.loginForm.value.loginemail && a.userpassword=== this.loginForm.value.loginpassword&&a.userrole==="user")
    //   {
    //     this.authservice.auth('user')
    //     this.toast.success('login successfull with users')
    //     sessionStorage.setItem('user','user')
    //     sessionStorage.setItem('isloggedin','user')
    //     sessionStorage.setItem('id',a.id);
    //     this.loggedinuserid=a.id;
    //     this.loginForm.reset()
    //     window.location.reload();
    //   }
    // })
       
    //  if(user){
    //   //  this.authservice.auth('admin')
    //    this.toast.success('login successfull with admin ');
    //    sessionStorage.setItem('user','admin')  
    //    sessionStorage.setItem('isloggedin','admin')
    //    this.loginForm.reset()
    //   window.location.reload();  
    //   }
    //  else
      // if(users){
      // this.authservice.auth('user')
      // this.toast.success('login successfull with users')
      // sessionStorage.setItem('user','user')
      // sessionStorage.setItem('isloggedin','user')
      // this.loginForm.reset()
      // window.location.reload();
    //  }

    //  else{
    //   this.toast.error('user not found')
    //  }
  onLogin(){
    if(this.loginForm.valid){
      this.authcall()  
    }
    else{
      this.toast.error('fill up the form.')
    }
  }
}
