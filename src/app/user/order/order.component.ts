import { Component,EventEmitter, Output } from '@angular/core';
import {Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateProductService } from 'src/app/services/updateproduct.service';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { GetorderbyidService } from 'src/app/services/getorderbyid.service';
import { ToastrService } from 'ngx-toastr';
import { GetallUsersService } from 'src/app/services/getallusers.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private userservice:GetallUsersService,
  private toast:ToastrService, private productservice :UpdateProductService, private order:GetorderbyidService ){}

  userid:number;
  productid:number;
  productForm:FormGroup;
  productname:string;
  productdata:any;
  productbrand:string;
  productstock:number;
  productimg:any;
  productprice:number;
  withvat:number;
  producttotal:number;
  redcolor:string;
  blackcolor:string;
  bluecolor:string;
  whitecolor:string;
  processing:boolean;
  cartid:any;
  deliveryaddress:string;
  orderstatus:string;
  username:string;
  contact:string;

  ngOnInit() {
    this.userid = Number(sessionStorage.getItem('id'));
    this.productid = this.data.productid;
    
   
    this.getproduct(this.productid);
    this.productForm=new FormGroup({
      productname: new FormControl(),
      productbrand:new FormControl(),
      productid:new FormControl(),
      userid:new FormControl(),
      quantity: new FormControl(),
      deliveryfee: new FormControl(),
      vat:new FormControl(),
      grandtotal: new FormControl(),
      colorred: new FormControl(),
      colorwhite: new FormControl(),
      colorblack: new FormControl(),
      colorblue: new FormControl(),
      deliveryaddress: new FormControl(),
      contactnumber:new FormControl(),
      processing:new FormControl(),
      productprice:new FormControl(),
      orderstatus:new FormControl(),
      username:new FormControl(),

  })
  }

  getusername(){
    this.userservice.getuserbyid(this.userid)
    .subscribe((data:any)=>{
      if(data){
          this.username=data.personaldetail.username;
           this.contact=data.personaldetail.usercontact;
      }
    })

  }
  
  getproduct(productid:number){
    this.getusername()
          this.productservice.productupdate(productid)
                .subscribe((data) =>{
                  // console.log(data);
                if(data){
                  this.productdata=data;
                  this.productname=this.productdata.productname;
                  this.productbrand=this.productdata.productbrand;
                  this.productimg=this.productdata.productpic;
                  this.productprice = this.productdata.productprice;
                  this.productstock=this.productdata.productstock;
                  this.withvat=(this.productprice*0.13)+this.productprice;
                  this.producttotal=this.withvat+150;
                  this.redcolor=this.productdata.colorred;
                  this.blackcolor=this.productdata.colorblack;
                  this.bluecolor=this.productdata.colorblue;
                  this.whitecolor=this.productdata.colorwhite;
                  this.productprice=this.productdata.productprice;
                                
                  this.productForm=new FormGroup({
                    productname: new FormControl(this.productname,),
                    productbrand:new FormControl(this.productbrand),
                    productid:new FormControl(this.productid),
                    productimg:new FormControl(this.productimg),
                    userid:new FormControl(this.userid),
                    username:new FormControl(this.username),
                    quantity: new FormControl(1,[Validators.min(1), Validators.max(this.productstock)]),
                    deliveryfee: new FormControl(150),
                    vat:new FormControl(this.withvat),
                    grandtotal: new FormControl(this.producttotal),
                    colorwhite: new FormControl(),
                    colorred: new FormControl(),
                    colorblack: new FormControl(),
                    colorblue: new FormControl(),
                    request:new FormControl(true),
                    processing:new FormControl(false),
                    deliveryaddress:new FormControl(null,[Validators.required, Validators.maxLength(50)]),
                   
                    contactnumber:new FormControl(this.contact),
                    productprice:new FormControl(this.productprice),
                    orderstatus:new FormControl("processing")
                   })
                }});
                }
  orderproduct(){
    if(this.productForm.valid){
    this.order.confirmorder(this.productForm)
    .subscribe(data=>{
     this.toast.success("an order has been created.");
      this.Deletecart( )
    })    }else{
      this.toast.error("user detailis invalid");
    }
  }

  Deletecart(){
    this.order.getorder()
      .subscribe((data:any[])=>{
        this.cartid=data.find((c:any)=>{
                if(c.userid===this.userid && c.productid===this.productid){
              const orderid=c.id;
              this.order.deleterorder(orderid)
              .subscribe(data=>{
                // this.toast.success('deleted cart')
              });
            }
          })        
        })
      }
 
}
