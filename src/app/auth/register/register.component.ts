import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
registerForm: FormGroup;

constructor(private http:HttpClient,private toast: ToastrService){

}


  ngOnInit(): void {
    this.registerForm= new FormGroup(
      {
        personaldetail: new FormGroup({
          username: new FormControl(null, Validators.required),
          useraddress: new FormControl(null, Validators.required),
          usercontact: new FormControl(null, [Validators.required, ,Validators.pattern(/^[1-9]\d{9}$/) ]),
          usergender: new FormControl("male")
        }),
        useremail:new FormControl(null,[Validators.required, Validators.email]),
        userrole: new FormControl("user"),
        userpassword: new FormControl(null,[Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
       
      });
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.http.post('http://localhost:3000/users',this.registerForm.value)
      .subscribe((data)=>{
        this.registerForm.reset();
        this.toast.success('successfully submitted');
      })
    }else{
      alert("Register Form is not valid")
    }
  }
}
