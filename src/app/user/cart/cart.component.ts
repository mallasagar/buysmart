import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductlistService } from 'src/app/services/productlist.service';
import { HttpClient } from '@angular/common/http';
import { UpdateProductService } from 'src/app/services/updateproduct.service';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(private productservice: ProductlistService,private toast: ToastrService , private http:HttpClient,
    private getproductbyid:UpdateProductService){}
    
    productid:any[] ;
    userid:number;
    cart:any;
    facart=faCartShopping;
    ordernumber:string;
    cartproduct:any;
    product:any ;
    productlist:any[];
    objectarray :any;
    filteredData: any[];
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
        sessionStorage.setItem('order', this.ordernumber);
        // sending order number to service
       
        const requests = this.productid.map(productId => this.getproductbyid.productupdate(productId));
        return forkJoin(requests);
      })
    )
    .subscribe((cartProducts) => {
      // cartProducts is an array containing the results of individual product update requests
      this.cartproduct = cartProducts;
      this.objectarray=Object.values(this.cartproduct);
    });
  }

}
    
 
        
  