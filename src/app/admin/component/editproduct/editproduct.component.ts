import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductlistService } from 'src/app/services/productlist.service';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdateProductService } from 'src/app/services/updateproduct.service';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  constructor(private toast: ToastrService, 
              private matdialog: MatDialog,
              private productservice: ProductlistService, 
              private UpdateProductService: UpdateProductService) {
              }
              
  
  objectarray :any[];
  product:any;
  productid:number;
  productbyid:any;
  fadelete=faTrash
  faedit=faPen
  toupdateproductname:string;

  // display list of products
  ngOnInit(){
    this.product=this.productservice.productlist().subscribe((product)=>{
      if(product){
        this.product=product;
        // converting object into array
        this.objectarray=Object.values(this.product)
      }
    });
  }

  // get products by id
  getproductbyid(productid:number){
   this.productid=productid
   this.productbyid=this.UpdateProductService.productupdate(this.productid).subscribe((product)=>{
     if(product){
       this.productbyid=product
       console.log(this.productbyid)
       this.matdialog.open(UpdateproductComponent,{
        width:'900px',
        data:{
          productname: this.productbyid.productname,
          productmakeyear: this.productbyid.productmakeyear,
          productstock: this.productbyid.productstock,
          productdescription: this.productbyid.productdescription,
          productbrand: this.productbyid.productbrand,
          colorred:this.productbyid.colorred,
          colorblack:this.productbyid.colorblack,
          colorblue:this.productbyid.colorblue,
          colorwhite:this.productbyid.colorwhite,
          colorgray:this.productbyid.colorgray,
          productpic:this.productbyid.productpic,
          productprice:this.productbyid.productprice,
          id:this.productid
        }
       })
     
      }
    })
  }
  // delete product by id
  deleteproduct(productid:number) {
    this.productid=productid
    console.log("for delete id ", this.productid)
    this.UpdateProductService.productdelete(this.productid).subscribe((product)=>{
      if(product){
        this.productbyid=product;
        this.toast.success("Product deleted successfully")
        window.location.reload()
      }
    })
  }  
}
