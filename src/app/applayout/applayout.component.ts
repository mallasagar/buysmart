import { Component, OnInit } from '@angular/core';
import { authenticationService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css']
})
export class ApplayoutComponent implements OnInit {
  constructor(private userrole:authenticationService,private toast: ToastrService ,  private router:Router){}

  user:string='user'
  
  ngOnInit() {
    
    this.user=sessionStorage.getItem('userrole');
    if(this.user==='admin'){
     this.router.navigate(['/admin'])
    }
    else if(this.user==='user'){
     this.router.navigate(['/home'])
    }
    else{
      this.user='user'
      this.router.navigate(['/home'])
    }
  }
}