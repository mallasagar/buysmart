import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Inject } from '@angular/core';
import { FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  users:any=[];
  productname:string;
  productmake:number;
  productstock:number;
  productdescriptions:string;
  productbrand:string;
  productpic:any;
  productprice:number;
  colorred:boolean;
  colorblack:boolean;
  colorwhite:boolean;
  colorblue:boolean;
  colorgray:boolean;
constructor(private http:HttpClient,@Inject(MAT_DIALOG_DATA) public data: any, ){
}

  ngOnInit(){

      this.productname= this.data.productname;
      this.productmake=this.data.productmakeyear;
      this.productstock=this.data.productstocks;
      this.productdescriptions=this.data.productdescription
      this.productbrand=this.data.productbrand
      this.productpic=this.data.productpic
      this.productprice=this.data.productprice
      this.colorred=this.data.colorreds
      this.colorblack=this.data.colorblacks
      this.colorwhite=this.data.colorwhites
      this.colorblue=this.data.colorblues
      this.colorgray=this.data.colorgrays
      // productmakeyear: new FormControl(this.data.productmakeyear,[Validators.required]),
      // productstock: new FormControl(this.data.productstock,[Validators.min(1), Validators.max(7), Validators.required]),
      // productdescription: new FormControl(this.data.productdescription,[Validators.required]),
      // productbrand: new FormControl(this.data.productbrand, [Validators.required]),
      // colorred:new FormControl(this.data.colorred),
      // colorblack:new FormControl(this.data.colorblack),
      // colorblue:new FormControl(this.data.colorblue),
      // colorwhite:new FormControl(this.data.colorwhite),
      // colorgray:new FormControl(this.data.colorgray),
      // productpic:new FormControl(this.data.productpic),
      // productprice:new FormControl(this.data.productprice, [Validators.min(0),Validators.max(10000)]),
    
  }

}
