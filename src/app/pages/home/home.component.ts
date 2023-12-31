import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
// import { MatCommonModule } from '@angular/material/core';
import { filter, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProductService } from 'src/app/services/updateproduct.service';
import { ToastrService } from 'ngx-toastr';
import { DetailComponent } from '../detail/detail.component';
import { Router } from '@angular/router';
import { GetallUsersService } from 'src/app/services/getallusers.service';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderComponent } from 'src/app/user/order/order.component';
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
  userid:number=Number(sessionStorage.getItem('id'));
  productbyid:any;
  orderForm:FormGroup;
  buyproductid:number;
  cartitem:any;
  cartdata:any[];
  cartarray:any;
  cartmap:any;
  cartproductid:any;
  cartstatus:boolean=false;
  
  constructor(
              private toast: ToastrService, 
              private matdialog: MatDialog,
              private productservice: ProductlistService, 
              private UpdateProductService: UpdateProductService,
              private getusers:GetallUsersService,
              private router:Router,
              private http: HttpClient,
              private matdialogue:MatDialog
              ) {
  }

  
  
  ngOnInit():void {    
   this.fetchproduct()
  }

// get all the products available 
  fetchproduct(){
    this.product=this.productservice.productlist().subscribe((product)=>{
      if(product){
        this.product=product;
        // converting object into array
         this.objectarray=Object.values(this.product);
      }
    })
  }

 

  addtocart(productid:number){
    // get product id , loggedin or not  and userid
      this.productid = Number(productid)
        const isloggedin=sessionStorage.getItem('Loggedin');
        this.userid=Number(sessionStorage.getItem('id'));
        // check whether user is logged in or not and update the user if not logged navigate to the login page 
   if(!isloggedin){
    this.toast.success("Signin First")
    this.router.navigate(['/login']);
   }else{
    // creating a form group to add productid  and userid for cart
    this.orderForm= new FormGroup(
      {
        productid:new FormControl(this.productid),
        userid:new FormControl(this.userid)
      });

      //get the cart list and determine whether there is any cart already  
      this.productservice.cartlist()
      // get all cart list items
     .subscribe((data:any)=>
     {this.cartitem=data
      // filter out product cart that match userid
      this.cartdata=this.cartitem.filter(item=>item.userid===this.userid)
      for(let i=0; i<this.cartdata.length; i++){
          // console.log(this.productid, this.cartarray[i].productid)
          if( this.productid===this.cartdata[i].productid){
            this.cartstatus=true;
            // if any one  condition in a loop comes true break the loop out
            break
          }
        }
        // check if product already exist in cart or not
        if(this.cartstatus===true){
          this.toast.error("product already in cart")
        }else{
          this.addcarttouserbyid()
        }
          }
        )
      }
  }

  getproductbyid(productid){
    this.productid=Number(productid)
    // get the product by id
    this.productbyid=this.UpdateProductService.productupdate(this.productid).subscribe((product)=>{
      // if product exist pass the data to the component through matdialogue
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


  //  add the product to the user with userid  function
  addcarttouserbyid(){
    this.http.post('http://localhost:3000/orders',this.orderForm.value)
      .subscribe((order)=>{
        if(order){
          this.toast.success('Product added successfully.');
        }
  })
  }
 
  // add the product id and user id to the confirmation database.
  buyproductbyid(productid:number){
    this.buyproductid=productid;
    const isloggedin=sessionStorage.getItem('Loggedin');
    if(!isloggedin) {
      this.toast.success("Signin First")
      this.router.navigate(['/login']);
    }else{
      this.matdialogue.open(OrderComponent,{
        width:"600px",
        data:{
          productid:this.buyproductid,
          userid:this.userid
        }
      })
    }
  }

 

}
