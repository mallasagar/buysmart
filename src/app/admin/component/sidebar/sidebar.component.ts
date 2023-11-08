import { Component } from '@angular/core';
import { faDashboard,faTruckFast ,faGear,faTrash , faBox, faList} from '@fortawesome/free-solid-svg-icons';
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
  
  faproduct=faBox
  falist=faList
  fatruck=faTruckFast



}
