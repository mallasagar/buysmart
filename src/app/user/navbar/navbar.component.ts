import { Component, OnInit } from '@angular/core';
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  famenu=faBars
  faclose=faXmark
  // aftertoggle:boolean=!this.toggle;
  
  ngOnInit(): void {
  }
    toggle:boolean = false;
    menu:boolean = true;
      
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

}
