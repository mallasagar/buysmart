import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ConfirmorderService {

  constructor(private http:HttpClient) { }


  getconfirmorders(){
    return this.http.get("http://localhost:3000/confirmorders");
  }
  

}
