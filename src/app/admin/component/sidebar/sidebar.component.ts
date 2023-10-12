import { Component } from '@angular/core';
import { faDashboard, faGear,faTrash,  faRightToBracket , faBox} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router:Router){

  }

  faDashboard = faDashboard;
  fasetting=faGear;
  fadelete=faTrash;
  falogout=faRightToBracket;
  faproduct=faBox

logout(){
  localStorage.setItem('user','user')
  this.router.navigate(['/login'])
  window.location.reload()
}


}
