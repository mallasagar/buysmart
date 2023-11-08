import { Component } from '@angular/core';
import { GetorderbyidService } from 'src/app/services/getorderbyid.service';
import { FormGroup, FormControl,FormBuilder, FormControlName, FormGroupName, Validators } from '@angular/forms';
import { GetallUsersService } from 'src/app/services/getallusers.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderadminComponent {
  confirmdata:any[];
  orderrequest:string;
  productForm:FormGroup;
  orderForm:FormGroup;
  userid:any[];
  userdata:any[];
  username:string[];
  productdata:any;
  name:any;
  // orderstatus:any;
  
  constructor(private orderservice:GetorderbyidService,private formBuilder: FormBuilder, private userservice:GetallUsersService  ){}
  ngOnInit(){
    this.getOrderrequest();
    this.productForm = new FormGroup({
      productname: new FormControl(),
      productbrand:new FormControl(),
      productid:new FormControl(),
      userid:new FormControl(),
      quantity: new FormControl(),
      deliveryfee: new FormControl(),
      vat:new FormControl(),
      productimg:new FormControl(),
      grandtotal: new FormControl(),
      colorred: new FormControl(),
      colorwhite: new FormControl(),
      colorblack: new FormControl(),
      colorblue: new FormControl(),
      deliveryaddress: new FormControl(),
      contactnumber:new FormControl(),
      productprice:new FormControl(),
      orderstatus:new FormControl(),
      processing:new FormControl(),
      username:new FormControl(),
      request:new FormControl(),
    })
  }
  getOrderrequest(){
    this.orderservice.getconfirmorder()
    .subscribe(data=>{
      this.confirmdata = Object.values(data)
      
      
      console.log(this.confirmdata)
      // this.userid=this.confirmdata.find((a)=>{
      //   this.userid = a.userid;
      //   this.userservice.getuserbyid(this.userid)
      //     .subscribe(data=>{
      //       this.userdata=Object.values(data);
      //       this.username=this.userdata[3]
            

          // })
      // })
    })
  }
  changestatus(itemid: number) {
  this.orderservice.getconfirmorder().subscribe((data) => {
    if (data) {
      this.productdata = Object.values(data).find((a) => a.id === itemid);

        this.productForm = new FormGroup({
          productname: new FormControl(this.productdata.productname),
          productbrand: new FormControl(this.productdata.productbrand),
          productid: new FormControl(this.productdata.productid),
          userid: new FormControl(this.productdata.userid),
          quantity: new FormControl(this.productdata.quantity),
          deliveryfee: new FormControl(this.productdata.deliveryfee),
          vat: new FormControl(this.productdata.vat),
          productimg: new FormControl(this.productdata.productimg),
          grandtotal: new FormControl(this.productdata.grandtotal),
          colorred: new FormControl(this.productdata.colorred),
          colorwhite: new FormControl(this.productdata.colorwhite),
          colorblack: new FormControl(this.productdata.colorblack),
          colorblue: new FormControl(this.productdata.colorblue),
          deliveryaddress: new FormControl(this.productdata.deliveryaddress),
          contactnumber: new FormControl(this.productdata.contactnumber),
          productprice: new FormControl(this.productdata.productprice),
          processing:new FormControl(true),
          request: new FormControl(false),
          orderstatus: new FormControl("Delivered"),
          username: new FormControl(this.productdata.username),
        });

        this.orderservice.updateconfirmorder(itemid, this.productForm).subscribe(
          (response) => {
            console.log('Order status updated successfully:', response);
            // Handle the response as needed
          },
          (error) => {
            console.error('Error updating order status:', error);
            // Handle error
          }
        );
     
    } else {
      console.error('No data received from the server');
      // Handle the case where no data is received
    }
  });
}

  // changestatus(itemid:number){
  //   this.orderservice.getconfirmorder()
  //   .subscribe((data)=>{
  //     if(data){
  //       console.log(data)
  //       console.log(itemid)
  //       this.productdata=Object.values(data)
  //        this.productdata.find((a)=>{
  //        if(a.id===itemid){
  //         this.productForm=new FormGroup({
  //           productname: new FormControl(this.productdata.productname,),
  //           productbrand:new FormControl(this.productdata.productbrand),
  //           productid:new FormControl(this.productdata.productid, ),
  //           userid:new FormControl(this.productdata.userid),
  //           quantity: new FormControl(this.productdata.quantity),
  //           deliveryfee: new FormControl(this.productdata.deliveryfee),
  //           vat:new FormControl(this.productdata.vat),
  //           productpic:new FormControl(this.productdata.productpic),
  //           grandtotal: new FormControl(this.productdata.grandtotal),
  //           colorred: new FormControl(this.productdata.colorred),
  //           colorwhite: new FormControl(this.productdata.colorwhite),
  //           colorblack: new FormControl(this.productdata.colorblack),
  //           colorblue: new FormControl(this.productdata.colorblue),
  //           deliveryaddress: new FormControl(this.productdata.deliveryaddress),
  //           contactnumber:new FormControl(this.productdata.contact),
  //           productprice:new FormControl(this.productdata.productprice),
  //           orderstatus:new FormControl(),
  //           username:new FormControl(this.productdata.username),
  //           request:new FormControl(this.productdata.request),
  //         })
  //        } 
  //       })
  //       this.orderservice.updateconfirmorder(itemid,this.productForm)
  //       .subscribe((response) => {
  //         console.log('Order status updated successfully:', response);
  //         // Handle the response as needed
  //       }, (error) => {
  //         console.error('Error updating order status:', error);
  //         // Handle error
  //       });
         
      
  //     }
  
     
  //   })
  // }

}
