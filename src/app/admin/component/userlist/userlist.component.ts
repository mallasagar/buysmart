import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GetallUsersService } from 'src/app/services/getallusers.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  userarray:any[];
  userlist:any;
  // userId:number;
  userbyid:any;
  fadelete=faTrash
  constructor(private toast: ToastrService, private userlistservice: GetallUsersService ) {
  }
  ngOnInit(){
    this.userlist=this.userlistservice.userlist().subscribe((users)=>{
      if(users){
        this.userlist=users;
        // converting object into array
        this.userarray=Object.values(this.userlist)
      }
    });
  }

  deleteuser(userid:number){
      // this.userId=userid
      this.userlistservice.deleteuserbyid(userid).subscribe((user)=>{
        if(user){
          this.userbyid=user;
          this.toast.success("user have been deleted successfully")
        }
      })}
      
    } 
