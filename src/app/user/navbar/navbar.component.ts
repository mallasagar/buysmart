import { Component, OnInit } from '@angular/core';
import { faBars,faXmark, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { GetallUsersService } from 'src/app/services/getallusers.service';
import { ProductlistService } from 'src/app/services/productlist.service';

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
  cartnumber:number;
  order:number;

  
constructor(private userbyid:GetallUsersService, private orderNumber:ProductlistService ){}

  ngOnInit(): void {
    this.order=Number(sessionStorage.getItem('order'));
    this.cartnumber=this.order
   this.isloggedin=Boolean(sessionStorage.getItem('userrole'));
   this.userid=Number(sessionStorage.getItem('id'));
    this.userdata=this.userbyid.getuserbyid(this.userid).subscribe((users)=>{
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

  logoutuser(){
    sessionStorage.removeItem('Loggedin');
    sessionStorage.removeItem('userrole');
    sessionStorage.removeItem('id');
    window.location.reload();

  }

}
