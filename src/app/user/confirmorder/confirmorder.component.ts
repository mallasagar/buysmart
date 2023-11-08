import { Component } from '@angular/core';
import { ConfirmorderService } from 'src/app/services/confirmorder.service';
import {map } from 'rxjs';
@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent {


  constructor(private confirmorder:ConfirmorderService
    ){}

  confirmdata:any;
  userid:number;
  productname:any;
  productdetail:any[];
  namearray:string[];
 
  // colorred:any;
  // colorwhite:any;
  // colorblue:any;
  // colorblack:any;
  ngOnInit(){
    this.getconfirmorder()
    this.userid=Number(sessionStorage.getItem('id'));
    // this.productForm= new FormGroup({
     
    //   :new FormControl(,),
    // })

  }
getconfirmorder(){
  this.confirmorder.getconfirmorders()
    .pipe(
      map((data: any[]) => {
        return data.filter((a) => a.userid === this.userid);
      })
    )
    .subscribe(
      (filteredData: any[]) => {
        this.confirmdata = filteredData;    
        // console.log(this.confirmdata);
     
      },
      (error) => {
        console.error('Error fetching and filtering confirm orders:', error);
      }
    );

}







}
