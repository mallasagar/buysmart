import { Component, OnInit } from '@angular/core';
import { faBars,faXmark, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { GetallUsersService } from 'src/app/services/getallusers.service';
import { GetorderbyidService } from 'src/app/services/getorderbyid.service';
import { ProductlistService } from 'src/app/services/productlist.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  famenu=faBars
  faclose=faXmark
  falogout=faRightFromBracket
  faprofile=faUser;
  // aftertoggle:boolean=!this.toggle;
  isloggedin:Boolean
  userid:number;
  
  
  toggle:boolean = false;
  menu:boolean = true;
  userinfo:any;
  userdata:any;
  username:string=null;
  cartnumber:any;
  order:number;

  
constructor(private userbyid:GetallUsersService, private orderservice:GetorderbyidService, private matdialog: MatDialog, ){}

  ngOnInit(): void {
   this.isloggedin=Boolean(sessionStorage.getItem('userrole'));
   this.userid=Number(sessionStorage.getItem('id'));
    this.userbyid.getuserbyid(this.userid).subscribe((users)=>{
      if(users){
        this.userinfo=users;
        this.username=this.userinfo.personaldetail.username
      }
    })
  }
  togglemenu(){
      this.toggle=!this.toggle;
      this.menu=!this.menu;
  }
  changetogglestate(){
    if(this.toggle==true){
      this.toggle=false;
      this.menu=!this.menu;
    }
    else{
      this.toggle=true;
    }
  }

  openprofile(){
      this.userbyid.getuserbyid(this.userid)
      .subscribe((user)=>{
        if(user){
          this.matdialog.open(ProfileComponent,{
           width:'600px',
           data:{
            profilename:user.personaldetail.username,
            profileemail:user.useremail,
            profileaddress:user.personaldetail.useraddress,
            profilecontact:user.personaldetail.usercontact,
            profilegender:user.personaldetail.usergender
           }
          })
        }
      }) 
  }

  logoutuser(){
    sessionStorage.removeItem('Loggedin');
    sessionStorage.removeItem('userrole');
    sessionStorage.removeItem('id');
    window.location.reload();

  }

}
