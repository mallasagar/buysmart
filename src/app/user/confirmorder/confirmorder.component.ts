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
 
  ngOnInit(){
    this.getconfirmorder()
    this.userid=Number(sessionStorage.getItem('id'));
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
      },
      (error) => {
        console.error('Error fetching and filtering confirm orders:', error);
      }
    );
  }
}
