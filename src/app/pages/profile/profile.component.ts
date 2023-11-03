import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username:string;
  useremail:string;
  usergender:string;
  useraddress:string;
  usercontact:number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, ){}

  ngOnInit() {
    this.username = this.data.profilename;
    this.useremail=this.data.profileemail;
    this.usercontact=this.data.profilecontact,
    this.useraddress=this.data.profileaddress,
    this.usergender=this.data.profilegender
  }

}
