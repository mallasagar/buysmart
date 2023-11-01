import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GetallUsersService } from 'src/app/services/getallusers.service';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  BrandTitle:String = 'BUY SMART'
  faprofile=faUser;
  admin:string;
  userdetail:any;
  adminid:number;
  falogout=faRightToBracket;

  constructor( private toast:ToastrService, private getuser: GetallUsersService){

  }


  userrole:string = sessionStorage.getItem('userrole');


  ngOnInit(){
    if( this.userrole==='admin'){
      this.adminid=Number(sessionStorage.getItem('id'));
      this.toast.success("Welcome Admimn"); 
      this.getuser.getuserbyid(this.adminid).subscribe((user)=>{
        if(user){
          this.userdetail = user;
          this.admin=this.userdetail.personaldetail.username;
        }
      })
    }

  }

  logout(){
    // sessionStorage.setItem('user','user')
    sessionStorage.removeItem('userrole')
    sessionStorage.removeItem('Loggedin')
    sessionStorage.removeItem('id')
    // this.router.navigate(['login'])
    window.location.reload()
  }


  

}
