import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class GetallUsersService {
  constructor(private http:HttpClient,private toast: ToastrService) { }
  
  userdata:any;
  userlist(){
     return this.http.get('http://localhost:3000/users/')

    // this.http.get('http://localhost:3000/products')
    // .subscribe((data)=>{
      
    //  return data
  }

  
}