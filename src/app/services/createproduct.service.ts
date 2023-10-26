import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CreateproductService {

  constructor(private http:HttpClient,private toast: ToastrService) { }

  createProduct(value:any){
    this.http.post('http://localhost:3000/products',value.value)
    .subscribe((data)=>{
      this.toast.success('Product added successfully.');
  })
  }
}
