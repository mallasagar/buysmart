import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __values } from 'tslib';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

constructor(private http:HttpClient){
}

users:any=[];

  ngOnInit(){

    this.http.get('http://localhost:3000/users')
    .subscribe((data)=>{
      console.log(data);
      this.users=data;
      
      
      
      
    })
  }

}
