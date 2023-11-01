import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  constructor(private http:HttpClient,private toast: ToastrService) { }
  productdata:any;
  producttocart:number;
  productlist(){
     return this.http.get('http://localhost:3000/products/')
  }

  addproducttocartbyid(productid:number){
    this.producttocart=productid
  }
}
