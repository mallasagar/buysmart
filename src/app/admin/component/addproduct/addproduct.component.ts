import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreateproductService } from 'src/app/services/createproduct.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
productForm:FormGroup;
constructor(private toast: ToastrService,
  private createproductservice: CreateproductService) {
  
}

file:any;

ngOnInit(): void {
  this.productForm= new FormGroup({
    productname: new FormControl(null,[Validators.required]),
    productmakeyear: new FormControl('2016',[Validators.required]),
    productstock: new FormControl(1,[Validators.min(1), Validators.max(7), Validators.required]),
    productdescription: new FormControl(null,[Validators.required]),
    productbrand: new FormControl(null, [Validators.required]),
    colorred:new FormControl(null),
    colorblack:new FormControl(null),
    colorblue:new FormControl(null),
    colorwhite:new FormControl(null),
    colorgray:new FormControl(null),
    productpic:new FormControl(null),
    productprice:new FormControl(null, [Validators.min(0),Validators.max(10000)]),
  })
}
    addProduct(){
      if(this.productForm.valid){
        this.createproductservice.createProduct(this.productForm)
        this.productForm.reset();
      }else{
        this.toast.error("form is invalid")
      }
    }
}
