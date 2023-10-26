import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
// import { MatCommonModule } from '@angular/material/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productservice: ProductlistService) {
  }
  facart=faCartShopping;
  product:any;
  objectarray:any[]

  ngOnInit(){
    this.product=this.productservice.productlist().subscribe((product)=>{
      if(product){
        this.product=product;
        // converting object into array
        this.objectarray=Object.values(this.product)
      }
    });
  }

}
