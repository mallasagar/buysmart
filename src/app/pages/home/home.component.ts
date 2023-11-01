import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
// import { MatCommonModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProductService } from 'src/app/services/updateproduct.service';
import { ToastrService } from 'ngx-toastr';
import { DetailComponent } from '../detail/detail.component';
import { Router } from '@angular/router';
import { GetallUsersService } from 'src/app/services/getallusers.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  facart=faCartShopping;
  product:any;
  objectarray:any[]
  productid:number;
  productbyid:any;
  productForm:FormGroup;

  constructor(
              private toast: ToastrService, 
              private matdialog: MatDialog,
              private productservice: ProductlistService, 
              private UpdateProductService: UpdateProductService,
              private getusers:GetallUsersService,
              private router:Router,
              ) {
  }


 
  ngOnInit(){
    this.productForm= new FormGroup({
    userorder:new FormControl(this.productid)})
    // fetch all products
    this.product=this.productservice.productlist().subscribe((product)=>{
      if(product){
        this.product=product;
        // converting object into array
        this.objectarray=Object.values(this.product)
      }
    })


  }
  addtocart(productid:number){
      this.productid = productid
        const isloggedin=sessionStorage.getItem('Loggedin');
        const userid=Number(sessionStorage.getItem('id'));
   if(!isloggedin){
    this.toast.success("Signin First")
    this.router.navigate(['/login']);
   }else{
    // sending product id to cart component.
        this.getusers.addcarttouserbyid(userid,this.productForm.value ).subscribe((users)=>{
          if(users){
            console.log(users)
            this.toast.success("Product hav been added to your wishlist.")
          }
        })
       }
  }

  getproductbyid(productid:number){
    this.productid=productid
    this.productbyid=this.UpdateProductService.productupdate(this.productid).subscribe((product)=>{
      if(product){
        this.productbyid=product
        this.matdialog.open(DetailComponent,{
         width:'700px',
         height:'400px',
         
         data:{
           productname: this.productbyid.productname,
           productmakeyear: this.productbyid.productmakeyear,
           productstocks: this.productbyid.productstock,
           productdescription: this.productbyid.productdescription,
           productbrand: this.productbyid.productbrand,
           colorreds:this.productbyid.colorred,
           colorwhites:this.productbyid.colorwhite,
           colorblacks:this.productbyid.colorblack,
           colorblues:this.productbyid.colorblue,
           colorwhite:this.productbyid.colorwhite,
           colorgrays:this.productbyid.colorgray,
           productpic:this.productbyid.productpic,
           productprice:this.productbyid.productprice,
           id:this.productid
         }
        })
      
       }
     })
   }
}
