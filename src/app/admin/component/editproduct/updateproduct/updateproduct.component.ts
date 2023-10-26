import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UpdateProductService } from 'src/app/services/updateproduct.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit{
  productForm:FormGroup;
  productbyid:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
              private updateservice:UpdateProductService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.productForm= new FormGroup({
      productname: new FormControl(this.data.productname,[Validators.required]),
      productmakeyear: new FormControl(this.data.productmakeyear,[Validators.required]),
      productstock: new FormControl(this.data.productstock,[Validators.min(1), Validators.max(7), Validators.required]),
      productdescription: new FormControl(this.data.productdescription,[Validators.required]),
      productbrand: new FormControl(this.data.productbrand, [Validators.required]),
      colorred:new FormControl(this.data.colorred),
      colorblack:new FormControl(this.data.colorblack),
      colorblue:new FormControl(this.data.colorblue),
      colorwhite:new FormControl(this.data.colorwhite),
      colorgray:new FormControl(this.data.colorgray),
      productpic:new FormControl(this.data.productpic),
      productprice:new FormControl(this.data.productprice, [Validators.min(0),Validators.max(10000)]),
    })
  }


  UpdateProduct(){
    if(this.productForm.valid){
      this.updateservice.updateproduct(this.data.id,this.productForm);
    }else{
      this.toast.error("Fill the form")
    }

}

}