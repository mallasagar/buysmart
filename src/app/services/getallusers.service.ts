import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetallUsersService {
  
  constructor(private http:HttpClient,private toast: ToastrService) {  
  }
  
  userdata:any;
  userlist():Observable<any>{
     return this.http.get('http://localhost:3000/users/')
  }
  deleteuserbyid(deleteuserid:number):Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${deleteuserid}`)
  }

  getuserbyid(userid:number): Observable<any>{
    return this.http.get(`http://localhost:3000/users/${userid}`)
  }

  addcarttouserbyid(userid:number, productid:number): Observable<any>{
    return this.http.put(`http://localhost:3000/users/${userid}`,productid)
  }
  

  
}