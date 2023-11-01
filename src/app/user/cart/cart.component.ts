import { Component } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productid:any;

  constructor(private productservice: ProductlistService){}
  





  ngOnInit(){
    this.productid=this.productservice.producttocart;
   
   
  }
    

}
