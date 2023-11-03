import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetorderbyidService {
  cartnumber:number;

  constructor(private http:HttpClient){}

 

  ordercount = (number:string) => {
    this.cartnumber =Number(number )
  }


deleterorder(orderid:number) {
  return this.http.delete(`http://localhost:3000/carts/${orderid}`)
}

}
