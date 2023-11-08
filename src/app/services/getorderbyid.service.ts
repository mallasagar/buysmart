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

confirmorder(order:any){
  return this.http.post("http://localhost:3000/confirmorders", order.value)

}
getconfirmorder(){
  return this.http.get("http://localhost:3000/confirmorders")
}
updateconfirmorder(id:number,value:any){
  return this.http.put(`http://localhost:3000/confirmorders/${id}`,value.value)
}

deleterorder(orderid:number) {
  return this.http.delete(`http://localhost:3000/orders/${orderid}`)
}

getorder(){
  return this.http.get("http://localhost:3000/orders")
}

}
