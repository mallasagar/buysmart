import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {
  constructor(private http:HttpClient,private toast: ToastrService) { }
  
  productupdate(productid:number){
     return this.http.get(`http://localhost:3000/products/${productid}`)
  }
  updateproduct(productid:number, value:any){
    this.http.put(`http://localhost:3000/products/${productid}`, value.value)
    .subscribe((data)=>{
      this.toast.success('Product Updated successfully.');
    })
  }
  productdelete(deleteproductid:number){
    return this.http.delete(`http://localhost:3000/products/${deleteproductid}`)
  }
}