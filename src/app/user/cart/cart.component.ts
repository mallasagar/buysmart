import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductlistService } from 'src/app/services/productlist.service';
import { HttpClient } from '@angular/common/http';
import { UpdateProductService } from 'src/app/services/updateproduct.service';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { GetorderbyidService } from 'src/app/services/getorderbyid.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(private productservice: ProductlistService,
    private orderservice:GetorderbyidService, private toast: ToastrService , private http:HttpClient,
    private getproductbyid:UpdateProductService,
    private matdialogue:MatDialog){}
    
    productid:any[] ;
    orderprice:any[];
    totalsum:number;
    buyproductid:number;
    sum:number=0;
    vat:number=0.13;
    withvat:number;
    grandtotal:number;
    initialsum:number=0;
    cartsum:number;
    userid:number;
    cartid:any[];
    CartId:number;
    cart:any;
    facart=faCartShopping;
    ordernumber:string;
    cartproduct:any;
    objectarray :any;
    data: any[] = [];

  ngOnInit(){
    this.userid=Number(sessionStorage.getItem('id'));
    this.getcart();
  }
  // getting an idthat match userid then get productid that matched userid
  getcart(){
    this.http.get<any>("http://localhost:3000/orders")
    .pipe(
      switchMap((cartItems) => {
        this.cart = cartItems.filter((cartItem) => cartItem.userid === this.userid);
        this.productid = this.cart.map((cart) => cart.productid);
        this.ordernumber=String(this.productid.length);  
        // this.cartid.push(this.productid);
        const requests = this.productid.map(productId => this.getproductbyid.productupdate(productId));
        return forkJoin(requests);
      })
    )
    .subscribe((cartProducts) => {
      // cartProducts is an array containing the results of individual product update requests
      this.cartproduct = cartProducts;
      this.objectarray=Object.values(this.cartproduct);
       for (let i = 0; i < this.objectarray.length; i++) {
        const checksum = this.objectarray[i].productprice;
        const sum=this.initialsum+checksum;
        this.initialsum=sum;
      }
      this.totalsum=this.initialsum;
      this.withvat=this.vat*this.totalsum;
      this.grandtotal=Math.abs(this.totalsum+this.withvat);
    }) 
  }

  buycart(productid:number){
    this.buyproductid=productid;
    this.matdialogue.open(OrderComponent,{
      width:"600px",
      data:{
        productid:this.buyproductid,
        userid:this.userid,
      }
    })
  }
  deletecart(cartId:string){
    // console.log(cartId)
    this.CartId=Number(cartId);
    this.http.get<any>("http://localhost:3000/orders")
          .subscribe((data) =>
            this.cartid=data.find(
            (a:any)=>{        
              if(a.productid===this.CartId){
                this.orderservice.deleterorder(a.id)
                  .subscribe((data) => {
                    if(data){
                      this.toast.success("Cartdeleted successfully!");
                    }
                  })
               }
            })
            )
        }


}   
 
        
  