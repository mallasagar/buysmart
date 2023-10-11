import { Component } from '@angular/core';
import { faDashboard, faGear,faTrash,  faRightToBracket , faBox} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  faDashboard = faDashboard;
  fasetting=faGear;
  fadelete=faTrash;
  falogout=faRightToBracket;
  faproduct=faBox
}
