import { Component, OnInit } from '@angular/core';
import { authenticationService } from '../services/auth.service';
@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css']
})
export class ApplayoutComponent implements OnInit {
  constructor(private userrole:authenticationService){}
  
  user:string=''
  ngOnInit() {
    
    this.user=this.userrole.userstate;
  }
}
