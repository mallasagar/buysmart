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
  constructor(private toast: ToastrService, private userlistservice: GetallUsersService) {
  }
  userarray:any[];
  userlist:any;

  fadelete=faTrash
  ngOnInit(){
    
    this.userlist=this.userlistservice.userlist().subscribe((users)=>{
      if(users){
        this.userlist=users;
        // converting object into array
        this.userarray=Object.values(this.userlist)
      
      }
    });
    // this.product=this.productservice.productlist()

    

    // console.log("Product",product);
  }

}
